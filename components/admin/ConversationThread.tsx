import type { Message } from "@/lib/dashboard-types";

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ConversationThread({ messages }: { messages: Message[] }) {
  return (
    <div className="space-y-4 py-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div className={`max-w-[75%] ${msg.role === "user" ? "order-1" : ""}`}>
            <div
              className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white rounded-br-md"
                  : "bg-gray-50 text-gray-700 rounded-bl-md border border-gray-100"
              }`}
            >
              {msg.content || (msg.tool_name ? `[Tool: ${msg.tool_name}]` : "[empty]")}
            </div>

            {/* Tool call badge */}
            {msg.tool_name && (
              <div className="mt-1 px-1">
                <span className="text-[10px] font-semibold text-fuchsia-600 bg-gradient-to-r from-fuchsia-50 to-violet-50 px-2.5 py-0.5 rounded-full border border-fuchsia-200/60 shadow-[0_1px_4px_rgba(217,70,239,0.1)]">
                  {msg.tool_name === "submit_lead" && "Lead submitted"}
                  {msg.tool_name === "redirect_to_quote" && "Quote redirect"}
                  {msg.tool_name === "transfer_to_phone" && "Phone transfer"}
                  {!["submit_lead", "redirect_to_quote", "transfer_to_phone"].includes(msg.tool_name) && msg.tool_name}
                </span>
              </div>
            )}

            <p className={`text-[10px] text-gray-400 mt-1 ${msg.role === "user" ? "text-right" : ""} px-1`}>
              {formatTime(msg.created_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
