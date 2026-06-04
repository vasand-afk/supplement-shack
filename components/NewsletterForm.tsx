"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: wire up to Resend/Supabase
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 text-center py-4">
        <span className="text-4xl">🎉</span>
        <p className="font-bold text-[#22C55E]">You&apos;re in!</p>
        <p className="text-sm text-[#A1A1AA]">Check your inbox for your 10% discount code.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 bg-[#27272A] border border-[#3F3F46] rounded-lg px-4 py-2.5 text-sm text-[#FAFAFA] placeholder-[#52525B] focus:outline-none focus:border-[#EA580C] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-5 py-2.5 bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-60 text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "..." : "Get 10% Off"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="w-full bg-[#27272A] border border-[#3F3F46] rounded-xl px-5 py-4 text-[#FAFAFA] placeholder-[#52525B] focus:outline-none focus:border-[#EA580C] transition-colors text-base"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-60 text-white font-black text-lg rounded-xl transition-colors"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe & Get 10% Off"}
      </button>
      <p className="text-xs text-[#52525B] text-center">
        No spam, ever. Unsubscribe in one click. By subscribing you agree to our privacy policy.
      </p>
    </form>
  );
}
