"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
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

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hey! I'm Zoey from R2G. Need help with a move or a quick quote? I'm here to help 😊",
};

// ── Zoey avatar (reusable) ──────────────────────────────────────────────────

function ZoeyAvatar({ size = 32 }: { size?: number }) {
  return (
    <div className="relative shrink-0">
      <Image
        src="/images/zoey-avatar.jpg"
        alt="Zoey"
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
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Typing simulation refs
  const typingBufferRef = useRef("");
  const typingPosRef = useRef(0);
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingMsgIdRef = useRef("");
  const typingDelayDoneRef = useRef(false);
  const typingStartRef = useRef(0);

  // Cleanup typing timer on unmount
  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  /** Start a typing simulation — shows thinking delay then gradual text */
  function startTypingEffect(msgId: string) {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    typingBufferRef.current = "";
    typingPosRef.current = 0;
    typingMsgIdRef.current = msgId;
    typingDelayDoneRef.current = false;
    typingStartRef.current = Date.now();

    const thinkingDelay = 800 + Math.random() * 600; // 800–1400ms

    typingTimerRef.current = setInterval(() => {
      // Wait out the thinking delay
      if (!typingDelayDoneRef.current) {
        if (Date.now() - typingStartRef.current < thinkingDelay || typingBufferRef.current.length === 0) return;
        typingDelayDoneRef.current = true;
      }

      const target = typingBufferRef.current;
      const pos = typingPosRef.current;

      if (pos < target.length) {
        // Vary speed: 1–3 chars per tick for natural feel
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
    }, 18); // ~55–165 chars/sec depending on step
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

  // Hide on /quote page
  if (pathname === "/quote") return null;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { scrollToBottom(); }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  // ── Open / close ────────────────────────────────────────────────────────

  function handleOpen() {
    setIsOpen(true);
    if (!hasOpened) {
      setHasOpened(true);
      trackEvent("chat_open", { event_category: "engagement", event_label: "Chat Widget Opened" });
    }
  }

  // ── Build Anthropic-format messages ─────────────────────────────────────

  function buildApiMessages(msgs: ChatMessage[]) {
    const apiMsgs: Array<{
      role: "user" | "assistant";
      content: string | Array<Record<string, unknown>>;
    }> = [];

    for (const m of msgs) {
      if (m.id === "welcome" || m.isLeadConfirmation) continue;

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

    const userMsg: ChatMessage = { id: uid(), role: "user", content: text.trim() };
    const assistantMsg: ChatMessage = { id: uid(), role: "assistant", content: "" };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
    setIsStreaming(true);
    startTypingEffect(assistantMsg.id);

    // Reset textarea height
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
        body: JSON.stringify({ messages: apiMessages }),
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
      // Stream ended — flush any remaining buffered text
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
      let success = false;
      try { const res = await fetch("/api/chat/submit-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input) }); success = res.ok; } catch { success = false; }

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
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: apiMessages }) });
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
    // Auto-resize
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating trigger bubble ─────────────────────────────────────── */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className={`group fixed z-[60] flex items-center gap-3 transition-all duration-300 hover:scale-[1.02] ${!hasOpened ? "animate-chatPulse" : ""}`}
          style={{
            bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
            right: "1.5rem",
          }}
          aria-label="Open chat"
        >
          {/* Greeting pill */}
          <div className="hidden lg:flex items-center bg-white rounded-full pl-4 pr-2 py-2 shadow-lg border border-gray-100 gap-2 group-hover:shadow-xl transition-shadow">
            <span className="text-sm text-gray-700 font-medium whitespace-nowrap">Chat with Zoey</span>
            <ZoeyAvatar size={32} />
          </div>
          {/* Mobile: just the avatar circle */}
          <div className="lg:hidden relative">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-[3px] border-[#F5C400] hover:border-[#d4a900] transition-colors">
              <Image
                src="/images/zoey-avatar.jpg"
                alt="Chat with Zoey"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          </div>
        </button>
      )}

      {/* ── Chat window ─────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed z-[60] flex flex-col overflow-hidden animate-chatSlideUp
            inset-0
            lg:inset-auto lg:bottom-6 lg:right-6 lg:w-[420px] lg:h-[600px] lg:rounded-2xl lg:shadow-2xl lg:border lg:border-gray-200"
          style={{ maxHeight: "100dvh" }}
        >
          {/* ── Header ────────────────────────────────────────────────── */}
          <div className="relative bg-gradient-to-r from-[#1A1A1A] to-[#2d2d2d] text-white px-5 py-4 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ZoeyAvatar size={40} />
                <div>
                  <p className="font-bold text-[15px] leading-tight">Zoey</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    <span className="text-gray-400 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
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
          <div className="flex-1 overflow-y-auto bg-[#f8f9fa] px-4 py-5 space-y-4">
            {messages.map((msg) => {
              // Lead confirmation card
              if (msg.isLeadConfirmation) {
                return (
                  <div key={msg.id} className="flex items-start gap-2.5">
                    <ZoeyAvatar size={28} />
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
                    <ZoeyAvatar size={28} />
                    <button
                      onClick={() => {
                        trackEvent("chat_quote_redirect", { event_category: "engagement", event_label: "Chat Quote Button Click" });
                        router.push("/quote");
                      }}
                      className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-bold text-sm py-3.5 px-6 rounded-2xl rounded-tl-md transition-all hover:shadow-md w-auto"
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
                    <ZoeyAvatar size={28} />
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md p-4 max-w-[85%] shadow-sm">
                      <p className="text-gray-800 font-semibold text-sm mb-2.5">Speak with our team</p>
                      <a
                        href="tel:1300959498"
                        onClick={() => trackPhoneClick("chat_widget")}
                        className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333] text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
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

              // Skip empty assistant messages (tool call processing)
              if (msg.role === "assistant" && !msg.content && !isStreaming) return null;

              // ── User message ──
              if (msg.role === "user") {
                return (
                  <div key={msg.id} className="flex justify-end">
                    <div className="bg-[#F5C400] text-[#1A1A1A] rounded-2xl rounded-br-md px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap shadow-sm">
                      {msg.content}
                    </div>
                  </div>
                );
              }

              // ── Assistant message ──
              return (
                <div key={msg.id} className="flex items-start gap-2.5">
                  <ZoeyAvatar size={28} />
                  <div className="bg-white text-[#1A1A1A] rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%] text-sm leading-relaxed whitespace-pre-wrap shadow-sm border border-gray-100">
                    {msg.content ? renderMarkdown(msg.content) : (isStreaming ? <TypingDots /> : null)}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Input area ────────────────────────────────────────────── */}
          <div
            className="bg-white border-t border-gray-200 px-4 py-3 shrink-0"
            style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
          >
            <div className="flex items-end gap-2 bg-gray-50 rounded-2xl border border-gray-200 focus-within:border-[#F5C400] focus-within:ring-2 focus-within:ring-[#F5C400]/20 transition-all px-4 py-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isStreaming}
                rows={1}
                className="flex-1 bg-transparent text-sm outline-none resize-none min-h-[24px] max-h-[100px] leading-relaxed disabled:opacity-50 placeholder:text-gray-400"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isStreaming}
                className="shrink-0 w-8 h-8 bg-[#F5C400] hover:bg-[#d4a900] disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all hover:scale-105"
                aria-label="Send message"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
