"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BAR_DELAYS = [0, 0.12, 0.24, 0.36, 0.24, 0.12, 0];

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase("fading"), 900);
    const doneTimer = setTimeout(() => setPhase("gone"), 1350);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden={phase === "fading"}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 55%, #ffdad4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        opacity: phase === "fading" ? 0 : 1,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}>
        {/* Brand Logo & Wordmark */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              position: "relative",
              width: "84px",
              height: "84px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(110, 0, 0, 0.16)",
              boxShadow: "0 16px 40px rgba(110, 0, 0, 0.14)",
              background: "#fff",
            }}
          >
            <Image src="/IMG/logo.png" alt="TopSafety" fill sizes="84px" style={{ objectFit: "cover" }} priority />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.45rem", fontWeight: 900, color: "var(--color-primary)", letterSpacing: "-0.03em", fontFamily: "Inter, sans-serif", lineHeight: 1.1 }}>
              TopSafety
            </p>
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-on-surface-variant)", fontFamily: "Cairo, sans-serif", marginTop: "4px" }}>
              قمة السلامة
            </p>
          </div>
        </div>

        {/* 7-Bar Equalizer (Spec §2.1) */}
        <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", height: "36px" }}>
          {BAR_DELAYS.map((delay, idx) => (
            <span
              key={idx}
              className="ts-eq-bar"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
