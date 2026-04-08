"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Invalid username or password");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-3xl font-extrabold text-yellow-400 tracking-tight mb-1">
            R2G
          </div>
          <p className="text-neutral-500 text-sm">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
          <label className="block text-sm font-medium text-neutral-400 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            placeholder="Enter username"
            autoFocus
            required
          />

          <label className="block text-sm font-medium text-neutral-400 mb-2 mt-4">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
            placeholder="Enter password"
            required
          />

          {error && (
            <p className="mt-3 text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-yellow-400 text-neutral-900 font-semibold py-3 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
