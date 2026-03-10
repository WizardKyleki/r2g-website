"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
  loading: () => null,
});

/** Defers ChatWidget load until after the page is interactive */
export default function ChatWidgetLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for the page to be fully interactive before loading the chat widget
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setReady(true));
    } else {
      setTimeout(() => setReady(true), 2000);
    }
  }, []);

  if (!ready) return null;
  return <ChatWidget />;
}
