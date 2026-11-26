"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";

const navLinks = [
  { href: "/",         en: "Home",     ar: "الرئيسيه"   },
  { href: "/services", en: "Services", ar: "خدماتنا"     },
  { href: "/contact",  en: "Contact",  ar: "تواصل معنا"  },
];

export default function FloatingHeader() {
  const { lang, toggleLang, isAr } = useLang();
  const [collapsed, setCollapsed]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const lastScrollY = useRef(0);
  const pathname    = usePathname();
  const fontFamily  = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  /* ── scroll collapse / expand ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 120) {
        setCollapsed(false);
      } else if (y > lastScrollY.current && y > 140) {
        setCollapsed(true);
      } else if (y < lastScrollY.current) {
        setCollapsed(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleNavClick = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {/* ── FIXED 3-SLOT FLOATING NAVBAR (Spec §2.2) ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          pointerEvents: "none",
          fontFamily,
        }}
      >
        {/* Expanded Bar */}
        <div
          className="wrap"
          style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
            transform: collapsed ? "translateY(-18px)" : "translateY(0)",
            opacity: collapsed ? 0 : 1,
            pointerEvents: collapsed ? "none" : "auto",
          }}
        >
          {/* Start Slot: Logo (flex: 1) */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
            <Link
              href="/"
              className="glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.4rem 0.95rem 0.4rem 0.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(47,47,47,0.08)",
                background: "rgba(255, 255, 255, 0.92)",
              }}
            >
              <div style={{ position: "relative", width: "2rem", height: "2rem", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(110,0,0,0.18)", flexShrink: 0 }}>
                <Image src="/IMG/logo.png" alt="TopSafety Logo" fill sizes="32px" style={{ objectFit: "cover" }} priority />
              </div>
              <span style={{ color: "var(--color-primary)", fontWeight: 900, letterSpacing: "-0.03em", fontSize: "0.98rem", fontFamily: "Inter, sans-serif" }}>
                TopSafety
              </span>
            </Link>
          </div>

          {/* Center Slot: Floating Pill Nav (desktop md+) */}
          <nav
            className="hidden md:flex items-center"
            dir={isAr ? "rtl" : "ltr"}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              gap: "6px",
              padding: "6px 8px",
              borderRadius: "9999px",
              background: "rgba(255, 255, 255, 0.94)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 8px 28px rgba(47,47,47,0.09)",
              border: "1px solid rgba(110,0,0,0.08)",
              whiteSpace: "nowrap",
            }}
          >
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={handleNavClick}
                  style={{
                    color: active ? "#fff" : "var(--color-secondary)",
                    background: active ? "var(--color-primary)" : "transparent",
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "color 0.2s, background 0.2s",
                    fontFamily,
                  }}
                >
                  {isAr ? l.ar : l.en}
                </Link>
              );
            })}
          </nav>

          {/* End Slot: Actions (flex: 1) */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "10px" }}>
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              style={{
                padding: "0.45rem 0.9rem",
                borderRadius: "9999px",
                border: "1.5px solid var(--color-outline-variant)",
                background: "rgba(255, 255, 255, 0.94)",
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "background 0.2s, border-color 0.2s",
                boxShadow: "0 4px 16px rgba(47,47,47,0.06)",
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-primary-fixed)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.94)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-outline-variant)";
              }}
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>

            {/* CTA — desktop only */}
            <Link
              href="/contact"
              className="hidden md:inline-flex"
              style={{
                padding: "0.55rem 1.2rem",
                background: "var(--color-primary)",
                color: "#fff",
                borderRadius: "9999px",
                fontSize: "0.82rem",
                fontWeight: 700,
                textDecoration: "none",
                flexShrink: 0,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 20px rgba(110, 0, 0, 0.22)",
                fontFamily,
              }}
            >
              {isAr ? "معاينة مجانية" : "Free Inspection"}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              id="hamburger-btn"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              className="md:hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid var(--color-outline-variant)",
                background: "rgba(255, 255, 255, 0.94)",
                boxShadow: "0 4px 16px rgba(47,47,47,0.08)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <span style={{ width: "16px", height: "2px", background: "var(--color-primary)", borderRadius: "2px", display: "block" }} />
              <span style={{ width: "12px", height: "2px", background: "var(--color-primary)", borderRadius: "2px", display: "block" }} />
              <span style={{ width: "16px", height: "2px", background: "var(--color-primary)", borderRadius: "2px", display: "block" }} />
            </button>
          </div>
        </div>

        {/* Collapsed Center Pill (on scroll > 140px) */}
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          aria-label="Expand navigation"
          style={{
            position: "absolute",
            top: "16px",
            left: "50%",
            transform: collapsed ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-20px)",
            opacity: collapsed ? 1 : 0,
            pointerEvents: collapsed ? "auto" : "none",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 22px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 10px 30px rgba(47,47,47,0.14)",
            border: "1px solid rgba(110,0,0,0.12)",
            cursor: "pointer",
          }}
        >
          <div style={{ position: "relative", width: "30px", height: "30px", borderRadius: "50%", overflow: "hidden", border: "1.5px solid rgba(110,0,0,0.2)" }}>
            <Image src="/IMG/logo.png" alt="TopSafety" fill sizes="30px" style={{ objectFit: "cover" }} />
          </div>
          <span style={{ color: "var(--color-primary)", fontWeight: 900, fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}>
            TopSafety
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </header>

      {/* ── MOBILE TOP-SHEET DRAWER (Spec §2.2) ── */}
      {drawerOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm"
          dir={isAr ? "rtl" : "ltr"}
          onClick={(e) => { if (e.target === e.currentTarget) setDrawerOpen(false); }}
        >
          <div
            style={{
              position: "fixed",
              top: "12px",
              left: "12px",
              right: "12px",
              maxHeight: "calc(100vh - 24px)",
              overflowY: "auto",
              background: "#fff",
              borderRadius: "24px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
              fontFamily,
            }}
          >
            {/* Drawer Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "12px", borderBottom: "1px solid var(--color-surface-container-high)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ position: "relative", width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(110,0,0,0.15)" }}>
                  <Image src="/IMG/logo.png" alt="TopSafety Logo" fill sizes="36px" style={{ objectFit: "cover" }} />
                </div>
                <span style={{ fontSize: "1.05rem", fontWeight: 900, color: "var(--color-primary)", fontFamily: "Inter, sans-serif" }}>
                  TopSafety
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "var(--color-surface-container-low)",
                  border: "none",
                  color: "var(--color-on-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {navLinks.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={handleNavClick}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 700,
                      background: active ? "var(--color-primary-fixed)" : "var(--color-surface)",
                      color: active ? "var(--color-primary)" : "var(--color-on-surface)",
                    }}
                  >
                    <span>{isAr ? l.ar : l.en}</span>
                    <span style={{ color: "var(--color-primary)", fontSize: "0.9rem" }}>{isAr ? "←" : "→"}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Lang Toggle + CTA Footer */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "8px", borderTop: "1px solid var(--color-surface-container-high)" }}>
              <button
                onClick={toggleLang}
                style={{
                  width: "100%",
                  padding: "11px 16px",
                  borderRadius: "9999px",
                  border: "1.5px solid var(--color-outline-variant)",
                  background: "transparent",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--color-on-surface)",
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? "التبديل إلى العربية 🇪🇬" : "Switch to English 🇬🇧"}
              </button>

              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                style={{
                  width: "100%",
                  padding: "14px",
                  textAlign: "center",
                  borderRadius: "9999px",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(110,0,0,0.22)",
                }}
              >
                {isAr ? "احصل على معاينة مجانية" : "Get a Free Inspection"}
              </Link>

              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--color-secondary)", marginTop: "4px" }}>
                {isAr ? "العاشر من رمضان — الأردنية · مول الجوهرة، الدور الرابع" : "10th of Ramadan City — Al Urduniyya · Mall Al Jawhara, 4th Floor"}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
