"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "ruo-acknowledged";

export default function RuoDisclaimer() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [age, setAge] = useState(false);
  const [research, setResearch] = useState(false);
  const [noHuman, setNoHuman] = useState(false);

  useEffect(() => {
    const acknowledged = sessionStorage.getItem(STORAGE_KEY);
    if (!acknowledged) setVisible(true);
  }, []);

  if (!visible) return null;

  const canProceed = age && research && noHuman;

  function handleDecline() {
    router.push("/shop/peptides");
  }

  function handleAccept() {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#18181B] border border-[#7C3AED] rounded-2xl max-w-lg w-full p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/20 flex items-center justify-center text-2xl">
            ⚗️
          </div>
          <div>
            <h2 className="text-xl font-black text-[#FAFAFA]">Research Use Only</h2>
            <p className="text-xs font-bold text-[#7C3AED] uppercase tracking-widest">
              Restricted Access Area
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-xl p-4 mb-6">
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            The products in this section are <strong className="text-[#FAFAFA]">Research Use Only (RUO)</strong> chemicals
            intended <strong className="text-[#FAFAFA]">solely for in vitro laboratory research</strong>. They are{" "}
            <strong className="text-red-400">NOT</strong> dietary supplements, drugs, or approved for human
            use by the FDA or any regulatory body. They are <strong className="text-red-400">NOT for
            human or veterinary consumption</strong>.
          </p>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3 mb-6">
          {[
            { id: "age", label: "I confirm I am 18 years of age or older", state: age, setter: setAge },
            {
              id: "research",
              label: "I am a qualified researcher, scientist, or professional purchasing for legitimate laboratory research purposes",
              state: research,
              setter: setResearch,
            },
            {
              id: "noHuman",
              label: "I understand these products are NOT for human or animal consumption and will not use them as such",
              state: noHuman,
              setter: setNoHuman,
            },
          ].map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-3 cursor-pointer group"
              onClick={() => item.setter(!item.state)}
            >
              <div
                className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 border-2 flex items-center justify-center transition-colors ${
                  item.state
                    ? "bg-[#7C3AED] border-[#7C3AED]"
                    : "bg-transparent border-[#3F3F46] group-hover:border-[#7C3AED]"
                }`}
              >
                {item.state && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-[#A1A1AA] leading-relaxed">{item.label}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="flex-1 py-3 border border-[#3F3F46] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#52525B] rounded-xl text-sm font-semibold transition-colors"
          >
            I do not qualify — Exit
          </button>
          <button
            onClick={handleAccept}
            disabled={!canProceed}
            className="flex-1 py-3 bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-xl text-sm font-bold transition-colors"
          >
            I Agree — Enter
          </button>
        </div>

        <p className="text-[10px] text-[#52525B] text-center mt-4">
          By entering you accept legal responsibility for appropriate use. Supplement Shack sells RUO chemicals in compliance with applicable law.
        </p>
      </div>
    </div>
  );
}
