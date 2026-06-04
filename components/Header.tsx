"use client";

import Link from "next/link";
import { useState } from "react";

const shopCategories = [
  { label: "General Wellness", href: "/shop/general-wellness", icon: "💊" },
  { label: "Sports Nutrition", href: "/shop/sports-nutrition", icon: "⚡" },
  { label: "Anti-Aging", href: "/shop/anti-aging", icon: "🔬" },
  { label: "Peptides", href: "/shop/peptides", icon: "🧬" },
  { label: "RUO Peptides", href: "/shop/peptides/ruo", icon: "⚗️", badge: "Research Only" },
  { label: "Wearable Devices", href: "/shop/wearables", icon: "⌚" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">
              <span className="gradient-text">SUPPLEMENT</span>
              <span className="text-[#FAFAFA]"> SHACK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Shop dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-[#FAFAFA] hover:bg-[#27272A] transition-colors">
                Shop
                <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {shopOpen && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-[#18181B] border border-[#3F3F46] rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    <Link
                      href="/shop"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#27272A] transition-colors text-sm text-[#A1A1AA] font-medium mb-1"
                    >
                      All Products →
                    </Link>
                    {shopCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#27272A] transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{cat.icon}</span>
                          <span className="text-sm font-medium text-[#FAFAFA] group-hover:text-[#FB923C] transition-colors">
                            {cat.label}
                          </span>
                        </div>
                        {cat.badge && (
                          <span className="text-[10px] font-bold bg-[#7C3AED] text-white px-1.5 py-0.5 rounded uppercase tracking-wide">
                            {cat.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#FAFAFA] hover:bg-[#27272A] transition-colors">
              Blog
            </Link>
            <Link href="/newsletter" className="px-4 py-2 rounded-lg text-sm font-semibold text-[#FAFAFA] hover:bg-[#27272A] transition-colors">
              Newsletter
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/newsletter"
              className="px-4 py-2 bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold rounded-lg transition-colors"
            >
              Get 10% Off
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#27272A] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#27272A] bg-[#18181B] px-4 py-4">
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#52525B] uppercase tracking-widest px-3 mb-2">Shop</p>
            {shopCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#27272A] transition-colors"
              >
                <span>{cat.icon}</span>
                <span className="font-medium">{cat.label}</span>
                {cat.badge && (
                  <span className="text-[10px] font-bold bg-[#7C3AED] text-white px-1.5 py-0.5 rounded uppercase">
                    RUO
                  </span>
                )}
              </Link>
            ))}
            <div className="border-t border-[#27272A] my-2" />
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-[#27272A] font-medium">Blog</Link>
            <Link href="/newsletter" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-[#27272A] font-medium">Newsletter</Link>
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 px-4 py-3 bg-[#EA580C] text-white font-bold rounded-lg text-center"
            >
              Get 10% Off Your First Order
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
