import type { Conversation } from "@/lib/dashboard-types";

export default function LeadCard({ conversation }: { conversation: Conversation }) {
  if (!conversation.has_lead) return null;

  const fields = [
    { label: "Name", value: conversation.lead_name },
    { label: "Phone", value: conversation.lead_phone },
    { label: "Email", value: conversation.lead_email },
    { label: "Moving From", value: conversation.lead_moving_from },
    { label: "Moving To", value: conversation.lead_moving_to },
    { label: "Move Type", value: conversation.lead_move_type },
  ].filter((f) => f.value);

  return (
    <div className="zoey-card-strong p-5 bg-gradient-to-br from-pink-50/80 via-fuchsia-50/60 to-violet-50/40">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-[0_2px_8px_rgba(217,70,239,0.3)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="text-sm font-bold zoey-gradient-text">Lead Captured</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {fields.map((f) => (
          <div key={f.label}>
            <p className="text-[10px] text-fuchsia-400 uppercase tracking-wider font-semibold">{f.label}</p>
            <p className="text-sm text-gray-800 mt-0.5 font-medium">{f.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
