"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { ChatMessage } from "@/lib/chat-config";
import {
  trackEvent,
  pushEnhancedConversionData,
  trackPhoneClick,
} from "@/lib/gtag";

// ── Helpers ─────────────────────────────────────────────────────────────────

let msgId = 0;
function uid() {
  return `msg_${++msgId}_${Date.now()}`;
}

/** Render basic markdown (bold, italic, line breaks) as React elements */
function renderMarkdown(text: string) {
  if (!text) return null;

  // Split into paragraphs by double newline
  const paragraphs = text.split(/\n{2,}/);

  return paragraphs.map((para, pi) => {
    // Process inline formatting within each paragraph
    const parts: React.ReactNode[] = [];
    // Match **bold**, *italic*, and plain text segments
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(para)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(para.slice(lastIndex, match.index));
      }
      if (match[2]) {
        // **bold**
        parts.push(<strong key={`${pi}-${match.index}`} className="font-semibold">{match[2]}</strong>);
      } else if (match[3]) {
        // *italic*
        parts.push(<em key={`${pi}-${match.index}`}>{match[3]}</em>);
      }
      lastIndex = match.index + match[0].length;
    }
    // Remaining text
    if (lastIndex < para.length) {
      parts.push(para.slice(lastIndex));
    }

    return (
      <span key={pi}>
        {pi > 0 && <><br /><br /></>}
        {parts}
      </span>
    );
  });
}

// ── Default AI Identity ──────────────────────────────────────────────────

const DEFAULT_AI_NAME = "Zoey";
const DEFAULT_GREETING = "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊";

// ── Quick Reply Suggestions ───────────────────────────────────────────────

function getQuickReplies(pathname: string | null, messageCount: number): string[] {
  // Only show on first message or very early in conversation
  if (messageCount > 2) return [];

  if (messageCount === 0) {
    // Initial quick replies
    if (pathname?.startsWith("/interstate-removalists")) {
      return ["Get an interstate quote", "What does it cost?", "How long does it take?"];
    }
    if (pathname?.startsWith("/removalists-")) {
      return ["Get a quote", "What are your rates?", "How does it work?"];
    }
    return ["Get a moving quote", "What are your rates?", "I need help packing"];
  }

  return [];
}

// ── Proactive Chat Config ─────────────────────────────────────────────────

const PROACTIVE_PAGES: Record<string, { delay: number; message: string }> = {
  "/contact": { delay: 15000, message: "Need a quick answer? I might be faster than a phone call! 😄" },
  "/services": { delay: 30000, message: "Got questions about any of our services? I'm here to help!" },
  "/storage": { delay: 25000, message: "Looking for storage info? I can help with sizes and pricing!" },
  "/storage-cairns": { delay: 25000, message: "Need storage in Cairns? I can give you the rundown on our facility!" },
};

// Pages with proactive triggers (partial prefix match)
const PROACTIVE_PREFIXES = [
  { prefix: "/removalists-", delay: 35000, message: "Still deciding? I can give you a quick price estimate right now!" },
  { prefix: "/interstate-removalists", delay: 30000, message: "Interstate moves can be tricky — want me to help figure out the logistics?" },
];

function getProactiveConfig(pathname: string | null): { delay: number; message: string } | null {
  if (!pathname) return null;

  // Exact match first
  if (PROACTIVE_PAGES[pathname]) return PROACTIVE_PAGES[pathname];

  // Prefix match
  for (const { prefix, delay, message } of PROACTIVE_PREFIXES) {
    if (pathname.startsWith(prefix)) return { delay, message };
  }

  return null;
}

// ── AI avatar (reusable) ─────────────────────────────────────────────────

function AiAvatar({ size = 32, name = DEFAULT_AI_NAME }: { size?: number; name?: string }) {
  return (
    <div className="relative shrink-0">
      <img
        src="/api/chat/avatar"
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
      <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
    </div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────

export default function ChatWidget() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [historyLoaded, setHistoryLoaded] = useState(false);

  // AI identity (fetched from DB, fallback to defaults)
  const [aiName, setAiName] = useState(DEFAULT_AI_NAME);

  // Chat rating state
  const [showRating, setShowRating] = useState(false);
  const [rating, setRating] = useState<1 | -1 | null>(null);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Proactive chat bubble
  const [proactiveBubble, setProactiveBubble] = useState<string | null>(null);
  const proactiveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Live agent (admin takeover) mode
  const [isLiveAgent, setIsLiveAgent] = useState(false);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastPollTimeRef = useRef<string>("");

  // Persistent conversation ID — use localStorage for returning visitors
  const [conversationId] = useState(() => {
    if (typeof window === "undefined") return crypto.randomUUID();

    // First check localStorage (persists across sessions)
    const stored = localStorage.getItem("zoey_conversation_id");
    const storedTime = localStorage.getItem("zoey_conversation_time");

    // If conversation is less than 7 days old, reuse it
    if (stored && storedTime) {
      const age = Date.now() - parseInt(storedTime, 10);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (age < sevenDays) {
        // Also keep in sessionStorage for page nav
        sessionStorage.setItem("zoey_conversation_id", stored);
        return stored;
      }
    }

    // Check sessionStorage (for current tab session)
    const sessionStored = sessionStorage.getItem("zoey_conversation_id");
    if (sessionStored) {
      localStorage.setItem("zoey_conversation_id", sessionStored);
      localStorage.setItem("zoey_conversation_time", Date.now().toString());
      return sessionStored;
    }

    // Brand new conversation
    const id = crypto.randomUUID();
    sessionStorage.setItem("zoey_conversation_id", id);
    localStorage.setItem("zoey_conversation_id", id);
    localStorage.setItem("zoey_conversation_time", Date.now().toString());
    return id;
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Typing simulation refs
  const typingBufferRef = useRef("");
  const typingPosRef = useRef(0);
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingMsgIdRef = useRef("");
  const typingDelayDoneRef = useRef(false);
  const typingStartRef = useRef(0);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      if (proactiveTimerRef.current) clearTimeout(proactiveTimerRef.current);
      if (pollTimerRef.current) clearInterval(pollTimerRef.current);
    };
  }, []);

  // ── Fetch AI identity + initialize welcome ──────────────────────────────
  useEffect(() => {
    let cancelled = false;
    async function init() {
      // Fetch AI identity (non-blocking, fire-and-forget if fails)
      let greetingText = DEFAULT_GREETING;
      try {
        const res = await fetch("/api/chat/greetings");
        if (res.ok) {
          const data = await res.json();
          if (data.name) setAiName(data.name);
          if (data.greeting) greetingText = data.greeting;
        }
      } catch { /* use defaults */ }

      if (cancelled) return;

      // Set welcome message if no messages yet
      if (messages.length === 0 && !historyLoaded) {
        const welcomeMsg: ChatMessage = {
          id: "welcome",
          role: "assistant",
          content: greetingText,
        };
        setMessages([welcomeMsg]);
      }
    }
    init();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Load conversation history for returning visitors ──────────────────────
  useEffect(() => {
    if (historyLoaded) return;

    async function loadHistory() {
      try {
        const res = await fetch(`/api/chat/history?id=${conversationId}`);
        const data = await res.json();

        if (data.messages && data.messages.length > 0 && !data.expired) {
          const restored: ChatMessage[] = data.messages.map(
            (m: { role: string; content: string; tool_name?: string; tool_input?: Record<string, string> }, i: number) => ({
              id: `restored_${i}`,
              role: m.role as "user" | "assistant",
              content: m.content,
              ...(m.tool_name === "submit_lead" && m.tool_input
                ? { isLeadConfirmation: true, toolCall: { name: m.tool_name, input: m.tool_input, id: `tool_${i}` } }
                : {}),
            }),
          );

          // Add a "conversation resumed" separator + welcome
          const welcomeMsg: ChatMessage = {
            id: "welcome",
            role: "assistant",
            content: "Welcome back! 👋 Here's where we left off. How can I help?",
          };
          setMessages([...restored, welcomeMsg]);

          // Check if lead was already submitted
          if (data.messages.some((m: { tool_name?: string }) => m.tool_name === "submit_lead")) {
            setLeadSubmitted(true);
          }
        }
      } catch {
        // Ignore — fresh conversation is fine
      }
      setHistoryLoaded(true);
    }

    loadHistory();
  }, [conversationId, historyLoaded]);

  // ── Live agent polling ──────────────────────────────────────────────────
  // Track which admin message IDs we've already added (prevent duplicates)
  const seenAdminMsgIds = useRef(new Set<string>());

  const doPoll = useCallback(async () => {
    try {
      const afterParam = lastPollTimeRef.current
        ? `&after=${encodeURIComponent(lastPollTimeRef.current)}`
        : "";
      const res = await fetch(
        `/api/chat/poll?id=${conversationId}${afterParam}`,
      );
      if (!res.ok) return;
      const data = await res.json();

      // Detect takeover status change
      if (data.takeover && !isLiveAgent) {
        setIsLiveAgent(true);
      } else if (!data.takeover && isLiveAgent) {
        setIsLiveAgent(false);
      }

      // Add new admin messages to the chat
      if (data.messages && data.messages.length > 0) {
        const newMsgs: ChatMessage[] = [];
        for (const m of data.messages) {
          if (m.role === "assistant" && m.is_admin && !seenAdminMsgIds.current.has(m.id)) {
            seenAdminMsgIds.current.add(m.id);
            newMsgs.push({
              id: `live_${m.id}`,
              role: "assistant",
              content: m.content,
            });
          }
        }
        if (newMsgs.length > 0) {
          setMessages((prev) => [...prev, ...newMsgs]);
        }
        // Update timestamp to latest message
        const lastMsg = data.messages[data.messages.length - 1];
        if (lastMsg?.created_at) {
          lastPollTimeRef.current = lastMsg.created_at;
        }
      }
    } catch {
      // Ignore poll errors
    }
  }, [conversationId, isLiveAgent]);

  // Poll whenever the chat window is open and user has sent at least 1 message
  useEffect(() => {
    const hasSentMessage = messages.some((m) => m.role === "user");
    if (!isOpen || !hasSentMessage) return;

    // Initialize poll timestamp if not set
    if (!lastPollTimeRef.current) {
      lastPollTimeRef.current = new Date(Date.now() - 10000).toISOString();
    }

    // Fast polling during takeover (3s), slower background check otherwise (6s)
    const interval = isLiveAgent ? 3000 : 6000;
    pollTimerRef.current = setInterval(doPoll, interval);

    // Also do an immediate poll
    doPoll();

    return () => {
      if (pollTimerRef.current) {
        clearInterval(pollTimerRef.current);
        pollTimerRef.current = null;
      }
    };
  }, [isOpen, isLiveAgent, doPoll, messages]);

  // ── Proactive chat triggers ──────────────────────────────────────────────
  useEffect(() => {
    // Don't trigger if already opened, or already showing bubble
    if (hasOpened || isOpen || proactiveBubble) return;

    const config = getProactiveConfig(pathname);
    if (!config) return;

    // Check if user dismissed proactive on this page already
    const dismissed = sessionStorage.getItem("zoey_proactive_dismissed");
    if (dismissed === pathname) return;

    proactiveTimerRef.current = setTimeout(() => {
      if (!hasOpened && !isOpen) {
        setProactiveBubble(config.message);
      }
    }, config.delay);

    return () => {
      if (proactiveTimerRef.current) {
        clearTimeout(proactiveTimerRef.current);
      }
    };
  }, [pathname, hasOpened, isOpen, proactiveBubble]);

  // ── Show rating prompt after conversation idle ────────────────────────────
  useEffect(() => {
    if (!isOpen || ratingSubmitted || rating !== null) return;

    // Show rating after 3+ user messages and 8 seconds of idle
    const userMsgCount = messages.filter((m) => m.role === "user").length;
    if (userMsgCount < 3 || isStreaming) return;

    const timer = setTimeout(() => {
      if (!isStreaming) setShowRating(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [messages, isOpen, isStreaming, ratingSubmitted, rating]);

  // ── Mobile keyboard viewport fix ─────────────────────────────────────────
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const [viewportOffset, setViewportOffset] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const vv = window.visualViewport;
    if (!vv) return;

    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    function handleResize() {
      const vv = window.visualViewport;
      if (!vv) return;

      const layoutHeight = window.innerHeight;
      const visualHeight = vv.height;
      const diff = layoutHeight - visualHeight;

      if (diff > 100) {
        setViewportHeight(visualHeight);
        setViewportOffset(vv.offsetTop);
      } else {
        setViewportHeight(null);
        setViewportOffset(0);
      }
    }

    const initTimer = setTimeout(handleResize, 50);

    vv.addEventListener("resize", handleResize);
    vv.addEventListener("scroll", handleResize);

    return () => {
      clearTimeout(initTimer);
      vv.removeEventListener("resize", handleResize);
      vv.removeEventListener("scroll", handleResize);
      setViewportHeight(null);
      setViewportOffset(0);
    };
  }, [isOpen]);

  /** Start a typing simulation — shows thinking delay then gradual text */
  function startTypingEffect(msgId: string) {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    typingBufferRef.current = "";
    typingPosRef.current = 0;
    typingMsgIdRef.current = msgId;
    typingDelayDoneRef.current = false;
    typingStartRef.current = Date.now();

    const thinkingDelay = 800 + Math.random() * 600;

    typingTimerRef.current = setInterval(() => {
      if (!typingDelayDoneRef.current) {
        if (Date.now() - typingStartRef.current < thinkingDelay || typingBufferRef.current.length === 0) return;
        typingDelayDoneRef.current = true;
      }

      const target = typingBufferRef.current;
      const pos = typingPosRef.current;

      if (pos < target.length) {
        const step = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1;
        typingPosRef.current = Math.min(pos + step, target.length);

        setMessages((prev) =>
          prev.map((m) =>
            m.id === typingMsgIdRef.current
              ? { ...m, content: target.slice(0, typingPosRef.current) }
              : m
          )
        );
      }
    }, 18);
  }

  /** Stop typing timer without flushing text */
  function stopTypingEffect() {
    if (typingTimerRef.current) {
      clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    }
  }

  /** Stop timer and display final text instantly */
  function flushTypingEffect(msgId: string, finalText: string) {
    stopTypingEffect();
    if (finalText) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msgId ? { ...m, content: finalText } : m))
      );
    }
  }

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (!isOpen) return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const scrollY = window.scrollY;
    const htmlEl = document.documentElement;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    htmlEl.style.overflow = "hidden";

    function preventScroll(e: TouchEvent) {
      const target = e.target as HTMLElement;
      if (target.closest?.(".chat-messages-scroll")) return;
      e.preventDefault();
    }
    document.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      htmlEl.style.overflow = "";
      document.removeEventListener("touchmove", preventScroll);
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    if (viewportHeight != null) {
      scrollToBottom();
    }
  }, [viewportHeight, scrollToBottom]);

  // Hide on /quote and /admin pages (must be AFTER all hooks)
  if (pathname === "/quote" || pathname?.startsWith("/admin")) return null;

  // ── Open / close ────────────────────────────────────────────────────────

  function handleOpen() {
    setIsOpen(true);
    setProactiveBubble(null);
    if (proactiveTimerRef.current) clearTimeout(proactiveTimerRef.current);
    if (!hasOpened) {
      setHasOpened(true);
      trackEvent("chat_open", { event_category: "engagement", event_label: "Chat Widget Opened" });
    }
  }

  function dismissProactive() {
    setProactiveBubble(null);
    if (pathname) sessionStorage.setItem("zoey_proactive_dismissed", pathname);
  }

  // ── Submit rating ─────────────────────────────────────────────────────────

  async function submitRating(value: 1 | -1) {
    setRating(value);
    setRatingSubmitted(true);
    setShowRating(false);
    trackEvent("chat_rating", { event_category: "engagement", event_label: value === 1 ? "thumbs_up" : "thumbs_down", value });
    try {
      await fetch("/api/chat/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ conversationId, rating: value }),
      });
    } catch { /* ignore */ }
  }

  // ── Build Anthropic-format messages ─────────────────────────────────────

  function buildApiMessages(msgs: ChatMessage[]) {
    const apiMsgs: Array<{
      role: "user" | "assistant";
      content: string | Array<Record<string, unknown>>;
    }> = [];

    for (const m of msgs) {
      if (m.id === "welcome" || m.id?.startsWith("restored_") || m.isLeadConfirmation) continue;

      if (m.role === "user" && m.toolCall) {
        apiMsgs.push({
          role: "user",
          content: [{ type: "tool_result", tool_use_id: m.toolCall.id, content: m.content }],
        });
      } else {
        apiMsgs.push({ role: m.role, content: m.content });
      }
    }
    return apiMsgs;
  }

  // ── Send message ────────────────────────────────────────────────────────

  async function sendMessage(text: string) {
    if (!text.trim() || isStreaming) return;

    // Hide quick replies and proactive
    setProactiveBubble(null);

    const userMsg: ChatMessage = { id: uid(), role: "user", content: text.trim() };
    const assistantMsg: ChatMessage = { id: uid(), role: "assistant", content: "" };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
    setIsStreaming(true);
    startTypingEffect(assistantMsg.id);

    if (inputRef.current) inputRef.current.style.height = "auto";

    const msgCount = messages.filter((m) => m.role === "user").length + 1;
    trackEvent("chat_message", { event_category: "engagement", event_label: "Chat Message Sent", message_number: msgCount });

    try {
      const abortController = new AbortController();
      abortRef.current = abortController;

      const allMessages = [...messages, userMsg];
      const apiMessages = buildApiMessages(allMessages);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, conversationId, pageUrl: pathname }),
        signal: abortController.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to connect");
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No stream");

      const decoder = new TextDecoder();
      let buffer = "";
      let currentText = "";
      let toolName = "";
      let toolId = "";
      let toolInputJson = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;

          try {
            const event = JSON.parse(data);

            // Handle admin takeover response
            if (event.type === "takeover") {
              flushTypingEffect(assistantMsg.id, event.content || "You're now chatting with a team member.");
              setIsLiveAgent(true);
              setIsStreaming(false);
              return;
            }

            if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
              currentText += event.delta.text;
              typingBufferRef.current = currentText;
            }

            if (event.type === "content_block_start" && event.content_block?.type === "tool_use") {
              toolName = event.content_block.name;
              toolId = event.content_block.id;
              toolInputJson = "";
            }

            if (event.type === "content_block_delta" && event.delta?.type === "input_json_delta") {
              toolInputJson += event.delta.partial_json;
            }

            if (event.type === "content_block_stop" && toolName) {
              let toolInput: Record<string, string> = {};
              try { toolInput = JSON.parse(toolInputJson || "{}"); } catch { /* empty */ }

              flushTypingEffect(assistantMsg.id, currentText);
              await handleToolCall(toolName, toolInput, toolId, assistantMsg.id, [...allMessages, { ...assistantMsg, content: currentText }]);
              toolName = "";
              toolId = "";
              toolInputJson = "";
            }
          } catch { /* skip */ }
        }
      }
      flushTypingEffect(assistantMsg.id, currentText);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      stopTypingEffect();
      console.error("Chat error:", err);
      setMessages((prev) => prev.map((m) =>
        m.id === assistantMsg.id
          ? { ...m, content: "Sorry, I'm having trouble right now. Give us a call on 1300 959 498 or try again in a moment!" }
          : m
      ));
    } finally {
      setIsStreaming(false);
      abortRef.current = null;
    }
  }

  // ── Handle tool calls ─────────────────────────────────────────────────────

  async function handleToolCall(name: string, input: Record<string, string>, toolUseId: string, assistantMsgId: string, conversationSoFar: ChatMessage[]) {
    if (name === "submit_lead") {
      if (leadSubmitted) {
        const confirmMsg: ChatMessage = { id: uid(), role: "assistant", content: "", isLeadConfirmation: true, toolCall: { name, input, id: toolUseId } };
        setMessages((prev) => [...prev, confirmMsg]);
        await continueAfterToolUse(toolUseId, name, input, "Lead was already submitted earlier in this conversation. Do not submit again.", conversationSoFar);
        return;
      }
      setLeadSubmitted(true);

      let success = false;
      try { const res = await fetch("/api/chat/submit-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...input, conversationId }) }); success = res.ok; } catch { success = false; }

      trackEvent("generate_lead", { event_category: "engagement", event_label: "Chat Lead Submit", currency: "AUD", value: 0, move_type: input.move_type || "unknown" });
      if (input.email || input.phone || input.name) pushEnhancedConversionData({ email: input.email, phone: input.phone, name: input.name });

      const confirmMsg: ChatMessage = { id: uid(), role: "assistant", content: "", isLeadConfirmation: true, toolCall: { name, input, id: toolUseId } };
      setMessages((prev) => [...prev, confirmMsg]);

      const toolResultContent = success ? "Lead submitted successfully. The team will contact the customer within 1 business day." : "Lead submission failed — but the customer's details were captured in the chat.";
      await continueAfterToolUse(toolUseId, name, input, toolResultContent, conversationSoFar);
    }

    if (name === "redirect_to_quote") {
      const redirectMsg: ChatMessage = { id: uid(), role: "assistant", content: "", toolCall: { name, input, id: toolUseId } };
      setMessages((prev) => [...prev, redirectMsg]);
      trackEvent("chat_quote_redirect", { event_category: "engagement", event_label: "Chat to Quote Redirect" });
      await continueAfterToolUse(toolUseId, name, input, "Quote form link shown to customer.", conversationSoFar);
    }

    if (name === "transfer_to_phone") {
      const phoneMsg: ChatMessage = { id: uid(), role: "assistant", content: "", toolCall: { name, input, id: toolUseId } };
      setMessages((prev) => [...prev, phoneMsg]);
      await continueAfterToolUse(toolUseId, name, input, "Phone number shown to customer.", conversationSoFar);
    }

    if (name === "transfer_to_whatsapp") {
      const waMsg: ChatMessage = { id: uid(), role: "assistant", content: "", toolCall: { name, input, id: toolUseId } };
      setMessages((prev) => [...prev, waMsg]);
      trackEvent("chat_whatsapp_transfer", { event_category: "engagement", event_label: "Chat WhatsApp Transfer" });
      await continueAfterToolUse(toolUseId, name, input, "WhatsApp link shown to customer.", conversationSoFar);
    }
  }

  // ── Continue conversation after tool use ──────────────────────────────────

  async function continueAfterToolUse(toolUseId: string, toolName: string, toolInput: Record<string, string>, resultContent: string, conversationSoFar: ChatMessage[]) {
    const followUpMsg: ChatMessage = { id: uid(), role: "assistant", content: "" };
    setMessages((prev) => [...prev, followUpMsg]);
    startTypingEffect(followUpMsg.id);

    const apiMessages = buildApiMessages(conversationSoFar);
    apiMessages.push({ role: "assistant", content: [{ type: "tool_use", id: toolUseId, name: toolName, input: toolInput }] });
    apiMessages.push({ role: "user", content: [{ type: "tool_result", tool_use_id: toolUseId, content: resultContent }] });

    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: apiMessages, conversationId, pageUrl: pathname }) });
      if (!res.ok) return;

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let buffer = "";
      let followUpText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const event = JSON.parse(data);
            if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
              followUpText += event.delta.text;
              typingBufferRef.current = followUpText;
            }
          } catch { /* skip */ }
        }
      }
      flushTypingEffect(followUpMsg.id, followUpText);
    } catch { stopTypingEffect(); }
  }

  // ── Textarea auto-resize + enter key ──────────────────────────────────────

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
  }

  // ── Quick reply data ──────────────────────────────────────────────────────
  const userMsgCount = messages.filter((m) => m.role === "user").length;
  const quickReplies = getQuickReplies(pathname, userMsgCount);

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating trigger bubble ─────────────────────────────────────── */}
      {!isOpen && (
        <div className="fixed z-[60]" style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))", right: "1.5rem" }}>
          {/* Proactive chat bubble */}
          {proactiveBubble && (
            <div className="absolute bottom-full right-0 mb-3 animate-chatSlideUp">
              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 max-w-[260px]">
                <button
                  onClick={(e) => { e.stopPropagation(); dismissProactive(); }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Dismiss"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <p className="text-sm text-gray-700 leading-relaxed">{proactiveBubble}</p>
                {/* Arrow pointing down */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
              </div>
            </div>
          )}

          <button
            onClick={handleOpen}
            className={`group flex items-center gap-3 transition-all duration-300 hover:scale-[1.03] ${!hasOpened ? "animate-chatBubblePulse" : ""}`}
            aria-label="Open chat"
          >
            {/* Greeting pill */}
            <div className="hidden lg:flex items-center bg-white rounded-full pl-4 pr-2 py-2 shadow-lg border border-pink-100/60 gap-2 group-hover:shadow-xl transition-shadow">
              <span className="text-sm text-fuchsia-700 font-medium whitespace-nowrap">Chat with {aiName}</span>
              <AiAvatar size={32} name={aiName} />
            </div>
            {/* Mobile: just the avatar circle */}
            <div className="lg:hidden relative">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-[3px] border-fuchsia-400 hover:border-violet-500 transition-colors">
                <img
                  src="/api/chat/avatar"
                  alt={`Chat with ${aiName}`}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
              {proactiveBubble && (
                <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
              )}
            </div>
          </button>
        </div>
      )}

      {/* ── Chat window ─────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="fixed z-[60] inset-0 max-h-dvh flex flex-col overflow-hidden animate-chatSlideUp bg-white
            lg:inset-auto lg:max-h-none lg:bottom-6 lg:right-6 lg:w-[420px] lg:h-[600px] lg:rounded-2xl lg:shadow-[0_8px_40px_rgba(168,85,247,0.15)] lg:border lg:border-pink-100/60"
          style={
            viewportHeight != null
              ? {
                  top: viewportOffset,
                  left: 0,
                  right: 0,
                  bottom: "auto",
                  height: viewportHeight,
                  maxHeight: viewportHeight,
                  overscrollBehavior: "none",
                }
              : {
                  overscrollBehavior: "none",
                }
          }
        >
          {/* ── Header ────────────────────────────────────────────────── */}
          <div className="relative bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600 text-white px-5 py-4 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0 ring-2 ring-white/30 rounded-full">
                  <img
                    src="/api/chat/avatar"
                    alt={aiName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    style={{ width: 40, height: 40 }}
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-fuchsia-600" />
                </div>
                <div>
                  <p className="font-bold text-[15px] leading-tight">{aiName}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span className="text-white/70 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                  aria-label="Close chat"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* ── Messages ──────────────────────────────────────────────── */}
          <div className="chat-messages-scroll flex-1 overflow-y-auto bg-gradient-to-b from-white to-pink-50/30 px-4 py-5 space-y-4" style={{ overscrollBehaviorY: "contain", WebkitOverflowScrolling: "touch" }}>
            {messages.map((msg) => {
              // Lead confirmation card
              if (msg.isLeadConfirmation) {
                return (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <AiAvatar size={28} />
                    <div className="bg-green-50 border border-green-200 rounded-2xl rounded-tl-md p-4 max-w-[85%]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                        <span className="text-green-700 font-semibold text-sm">Details sent to our team!</span>
                      </div>
                      <p className="text-green-600 text-xs leading-relaxed">Our moving specialist will get in touch with you as soon as possible.</p>
                    </div>
                  </div>
                );
              }

              // Quote redirect card
              if (msg.toolCall?.name === "redirect_to_quote") {
                return (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <AiAvatar size={28} />
                    <button
                      onClick={() => {
                        trackEvent("chat_quote_redirect", { event_category: "engagement", event_label: "Chat Quote Button Click" });
                        router.push("/quote");
                      }}
                      className="bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-600 hover:to-violet-600 text-white font-bold text-sm py-3.5 px-6 rounded-2xl rounded-tl-md transition-all hover:shadow-md w-auto"
                    >
                      Get Your Detailed Quote &rarr;
                    </button>
                  </div>
                );
              }

              // Phone transfer card
              if (msg.toolCall?.name === "transfer_to_phone") {
                return (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <AiAvatar size={28} />
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md p-4 max-w-[85%] shadow-sm">
                      <p className="text-gray-700 font-semibold text-sm mb-2.5">Speak with our team</p>
                      <a
                        href="tel:1300959498"
                        onClick={() => trackPhoneClick("chat_widget")}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-700 hover:to-violet-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        1300 959 498
                      </a>
                    </div>
                  </div>
                );
              }

              // WhatsApp transfer card
              if (msg.toolCall?.name === "transfer_to_whatsapp") {
                return (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <AiAvatar size={28} />
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md p-4 max-w-[85%] shadow-sm">
                      <p className="text-gray-800 font-semibold text-sm mb-2.5">Chat on WhatsApp</p>
                      <a
                        href="https://wa.me/611300959498"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("chat_whatsapp_click", { event_category: "engagement", event_label: "WhatsApp Transfer" })}
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                );
              }

              // Skip empty assistant messages (tool call processing)
              if (msg.role === "assistant" && !msg.content && !isStreaming) return null;

              // ── User message ──
              if (msg.role === "user") {
                return (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap shadow-sm">
                      {msg.content}
                    </div>
                  </div>
                );
              }

              // ── Assistant message ──
              return (
                <div key={msg.id} className="flex items-start gap-2.5">
                  <AiAvatar size={28} />
                  <div className="bg-white text-gray-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap shadow-sm border border-pink-100/60">
                    {msg.content ? renderMarkdown(msg.content) : (isStreaming ? <TypingDots /> : null)}
                  </div>
                </div>
              );
            })}

            {/* Quick Reply Buttons */}
            {quickReplies.length > 0 && !isStreaming && (
              <div className="flex flex-wrap gap-2 pl-10">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => sendMessage(reply)}
                    className="bg-white hover:bg-fuchsia-50 border border-pink-100/60 hover:border-fuchsia-300 text-gray-600 hover:text-fuchsia-700 text-sm px-3.5 py-2 rounded-xl transition-all hover:shadow-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Rating prompt */}
            {showRating && !ratingSubmitted && (
              <div className="flex items-start gap-2.5">
                <AiAvatar size={28} />
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md p-4 shadow-sm">
                  <p className="text-sm text-gray-700 mb-2.5">How am I doing? Your feedback helps me improve!</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => submitRating(1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 text-sm font-medium transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      Helpful
                    </button>
                    <button
                      onClick={() => submitRating(-1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 text-sm font-medium transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" />
                      </svg>
                      Not helpful
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Rating submitted confirmation */}
            {ratingSubmitted && (
              <div className="flex items-start gap-2.5">
                <AiAvatar size={28} />
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-md px-4 py-2.5 shadow-sm">
                  <p className="text-xs text-gray-500">
                    {rating === 1 ? "Thanks for the thumbs up! 😊" : "Thanks for the feedback — I'll work on improving! 🙏"}
                  </p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Live agent banner ────────────────────────────────────── */}
          {isLiveAgent && (
            <div className="bg-gradient-to-r from-fuchsia-50 to-violet-50 border-t border-fuchsia-100/60 px-4 py-2 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-fuchsia-700">You&apos;re chatting with a team member</span>
              </div>
            </div>
          )}

          {/* ── Input area ────────────────────────────────────────────── */}
          <div
            className="bg-white border-t border-pink-100/40 px-4 py-3 shrink-0"
            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
          >
            <div className="flex items-end gap-2 bg-gray-50/80 rounded-2xl border border-pink-100/60 focus-within:border-fuchsia-300 focus-within:ring-2 focus-within:ring-fuchsia-100 transition-all px-4 py-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isStreaming}
                rows={1}
                inputMode="text"
                autoComplete="off"
                autoCorrect="on"
                className="flex-1 bg-transparent text-[16px] sm:text-sm outline-none resize-none min-h-[24px] max-h-[100px] leading-relaxed disabled:opacity-50 placeholder:text-gray-400"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isStreaming}
                className="shrink-0 w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-600 hover:to-violet-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all hover:scale-105"
                aria-label="Send message"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">Powered by R2G Transport &amp; Storage</p>
          </div>
        </div>
      )}
    </>
  );
}

// ── Typing indicator ──────────────────────────────────────────────────────

function TypingDots() {
  return (
    <span className="inline-flex gap-1.5 py-1 items-center">
      <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
      <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
      <span className="w-2 h-2 rounded-full bg-gray-300 typing-dot" />
    </span>
  );
}
