import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: "General Wellness", href: "/shop/general-wellness" },
    { label: "Sports Nutrition", href: "/shop/sports-nutrition" },
    { label: "Anti-Aging", href: "/shop/anti-aging" },
    { label: "Peptides", href: "/shop/peptides" },
    { label: "RUO Peptides", href: "/shop/peptides/ruo" },
    { label: "Wearable Devices", href: "/shop/wearables" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "RUO Disclaimer", href: "/shop/peptides/ruo" },
    { label: "Refund Policy", href: "/refunds" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-[#27272A]">
      {/* Trust badges row */}
      <div className="border-b border-[#27272A] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🔬", title: "3rd Party Tested", sub: "Every batch verified" },
              { icon: "📄", title: "COA Available", sub: "Full transparency" },
              { icon: "🏭", title: "GMP Certified", sub: "FDA-registered facility" },
              { icon: "🚚", title: "Free Shipping $75+", sub: "Fast US delivery" },
            ].map((badge) => (
              <div key={badge.title} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{badge.icon}</span>
                <p className="text-sm font-bold text-[#FAFAFA]">{badge.title}</p>
                <p className="text-xs text-[#A1A1AA]">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-black tracking-tight">
                <span className="gradient-text">SUPPLEMENT</span>
                <span className="text-[#FAFAFA]"> SHACK</span>
              </span>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              Science-backed supplements for performance, longevity, and optimization.
              Every product third-party tested with published COAs.
            </p>
            <div className="flex gap-3 mt-4">
              {["𝕏", "IG", "YT"].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-lg bg-[#18181B] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-[#A1A1AA] hover:text-white hover:border-[#EA580C] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#52525B] mb-4">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#52525B]">
          <p>© {new Date().getFullYear()} Supplement Shack. All rights reserved.</p>
          <p className="text-center max-w-lg">
            <strong className="text-[#A1A1AA]">Disclaimer:</strong> These statements have not been evaluated by the FDA.
            Products are not intended to diagnose, treat, cure, or prevent any disease.
            RUO products are for laboratory research only — not for human consumption.
          </p>
        </div>
      </div>
    </footer>
  );
}
