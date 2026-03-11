import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZoeyAI Dashboard",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="zoey-dashboard min-h-screen text-gray-900 relative overflow-hidden">
      {/* Vivid gradient mesh background — ZoeyAI brand */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FDF6FA]" />
        <div className="absolute -top-[200px] -right-[100px] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-pink-300/50 via-fuchsia-200/40 to-transparent blur-[100px]" />
        <div className="absolute top-[30%] -left-[200px] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-300/35 via-purple-200/25 to-transparent blur-[100px]" />
        <div className="absolute -bottom-[100px] right-[10%] w-[800px] h-[600px] rounded-full bg-gradient-to-t from-pink-200/40 via-rose-100/30 to-transparent blur-[100px]" />
        <div className="absolute top-[60%] left-[40%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-100/30 to-transparent blur-[80px]" />
      </div>
      {children}
    </div>
  );
}
