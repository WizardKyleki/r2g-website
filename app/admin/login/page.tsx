"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100/60 via-fuchsia-50/40 to-violet-100/50 px-4 relative overflow-hidden">
      {/* Background mesh blobs */}
      <div className="absolute -top-[150px] -right-[100px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-300/40 via-fuchsia-200/30 to-transparent blur-[80px]" />
      <div className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-violet-300/30 via-purple-200/20 to-transparent blur-[80px]" />
      <div className="w-full max-w-sm relative z-10">
        <div className="text-center mb-8">
          <span
            className="text-3xl font-bold italic text-gray-900 inline-block"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Zoey<span className="bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">AI</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">Sign in to your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="zoey-card-strong p-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1.5 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoFocus
              className="zoey-input w-full px-4 py-3 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="zoey-btn w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
