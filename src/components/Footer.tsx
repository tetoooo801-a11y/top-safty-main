"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const copy = {
  en: {
    brandDesc: "Your trusted partner for NFPA-compliant fire fighting, early warning alarm, sprinkler, and civil defense handover systems across Egypt.",
    nav: "Navigation",
    servicesCol: "Solutions",
    contact: "Direct Contact",
    connect: "Connect With Us",
    address1: "10th of Ramadan City — Al Urduniyya · Mall Al Jawhara, 4th Floor",
    slogan: "Engineering Safety · Protecting Lives",
    rights: "All rights reserved",
    home: "Home",
    services: "Services",
    contactLink: "Contact Us",
    svcList: [
      "Fire Suppression & Sprinklers",
      "Addressable Fire Alarms",
      "Fire Pumps & Cabinets",
      "Annual Maintenance",
    ],
    ctaTitle: "Need a Free Site Inspection?",
    ctaSub: "Schedule an engineering assessment and civil defense consultation for your facility.",
    ctaBtn: "Request Inspection",
  },
  ar: {
    brandDesc: "شريكك الموثوق لتوريد وتركيب أنظمة مكافحة الحريق، الإنذار المبكر، الرش الآلي، واعتماد الحماية المدنية في جميع أنحاء مصر.",
    nav: "تصفح الموقع",
    servicesCol: "حلولنا",
    contact: "بيانات التواصل",
    connect: "تواصل معنا مباشرة",
    address1: "العاشر من رمضان — الأردنية · مول الجوهرة، الدور الرابع",
    slogan: "نصنع الأمان، لنحمي الحياة",
    rights: "جميع الحقوق محفوظة",
    home: "الرئيسيه",
    services: "خدماتنا",
    contactLink: "تواصل معنا",
    svcList: [
      "أنظمة الإطفاء والرش الآلي",
      "الإنذار المبكر المعنون والعادي",
      "مضخات وصناديق الحريق",
      "عقود الصيانة السنوية",
    ],
    ctaTitle: "هل تحتاج لمعاينة مجانية لمشروعك؟",
    ctaSub: "احجز زيارة هندسية لتقييم الموقع وإعداد عرض سعر متكامل ومعتمد.",
    ctaBtn: "اطلب معاينة مجانية",
  },
};

export default function Footer() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  return (
    <footer style={{ background: "var(--color-surface)", padding: "32px 16px 24px", fontFamily }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ── SINGLE-CARD MOBILE FOOTER (< 1024px) ── */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="flex flex-col lg:hidden"
          style={{
            background: "#1a1c1c",
            color: "#f0f1f1",
            borderRadius: "24px",
            padding: "28px 22px",
            gap: "22px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle crimson glow */}
          <div style={{ position: "absolute", top: "-3rem", insetInlineEnd: "-3rem", width: "10rem", height: "10rem", borderRadius: "50%", background: "rgba(110, 0, 0, 0.32)", filter: "blur(45px)", pointerEvents: "none" }} />

          {/* Brand & Description */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                <div style={{ position: "relative", width: "42px", height: "42px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,218,212,0.3)", flexShrink: 0 }}>
                  <Image src="/IMG/logo.png" alt="TopSafety Logo" fill sizes="42px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 900, fontSize: "1.15rem", color: "#fff", fontFamily: "Inter, sans-serif", lineHeight: 1.1 }}>TopSafety</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-primary-fixed)", fontFamily: "Cairo, sans-serif" }}>قمة السلامة</p>
                </div>
              </Link>

              <div style={{ display: "flex", gap: "8px" }}>
                <a href="https://wa.me/201111400982" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L0 24l6.31-1.489A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.804 9.804 0 01-5.031-1.384l-.36-.213-3.748.884.886-3.65-.235-.374A9.82 9.82 0 012.18 12C2.18 6.57 6.57 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82s-4.39 9.82-9.82 9.82z"/></svg>
                </a>
                <a href="https://m.me/qmtalslamtlanzmtalatfa" target="_blank" rel="noopener noreferrer" aria-label="Messenger" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#0084FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.506 1.558 6.651 4.026 8.835V24l3.807-2.094A12.06 12.06 0 0012 22.2c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.193 14.963l-3.055-3.26-5.963 3.26L10.35 8.79l3.131 3.26 5.887-3.26-6.175 6.173z"/></svg>
                </a>
                <a href="tel:+201091664974" aria-label="Call Sales" style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </a>
              </div>
            </div>

            <p style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
              {tx.brandDesc}
            </p>
            <p style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.5 }}>
              {tx.address1}
            </p>
          </div>

          {/* 2-Column Links & Contact */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>{tx.nav}</p>
              <Link href="/" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: "0.86rem" }}>{tx.home}</Link>
              <Link href="/services" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: "0.86rem" }}>{tx.services}</Link>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: "0.86rem" }}>{tx.contactLink}</Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: "2px" }}>{tx.contact}</p>
              <a href="tel:+201091664974" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: "0.84rem" }}>
                <span dir="ltr" className="inline-block">+20 10 9166 4974</span>
              </a>
              <a href="tel:01111400982" style={{ color: "rgba(255,255,255,0.82)", textDecoration: "none", fontSize: "0.84rem" }}>
                <span dir="ltr" className="inline-block">011 1140 0982</span>
              </a>
              <a href="mailto:sales@TOPSAFTY-EG.com" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.78rem", wordBreak: "break-all" }}>
                <span dir="ltr" className="inline-block">sales@TOPSAFTY-EG.com</span>
              </a>
            </div>
          </div>

          {/* CTA Bar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "0.92rem", fontWeight: 700, color: "#fff" }}>{tx.ctaTitle}</p>
            <Link
              href="/contact"
              style={{
                width: "100%",
                textAlign: "center",
                padding: "11px 18px",
                borderRadius: "9999px",
                background: "var(--color-primary)",
                color: "#fff",
                fontSize: "0.86rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 20px rgba(110,0,0,0.35)",
              }}
            >
              {tx.ctaBtn} {isAr ? "←" : "→"}
            </Link>
          </div>

          {/* Bottom Row: Copyright */}
          <div style={{ textAlign: "center", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", zIndex: 1 }}>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>
              © {new Date().getFullYear()} TopSafety — قمة السلامة · {tx.rights}
            </p>
            <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", marginTop: "3px" }}>
              {tx.slogan}
            </p>
          </div>
        </div>

        {/* ── SPLIT-CARD DESKTOP FOOTER (>= 1024px) ── */}
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="hidden lg:flex flex-row items-stretch"
          style={{ gap: "20px" }}
        >
          {/* 1/3 Primary Brand Card */}
          <div
            className="w-full lg:w-1/3"
            style={{
              background: "#1a1c1c",
              color: "#f0f1f1",
              borderRadius: "24px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle brand crimson ambient glow */}
            <div style={{ position: "absolute", top: "-4rem", insetInlineEnd: "-4rem", width: "14rem", height: "14rem", borderRadius: "50%", background: "rgba(110, 0, 0, 0.35)", filter: "blur(55px)", pointerEvents: "none" }} />

            {/* Top Logo */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                <div style={{ position: "relative", width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,218,212,0.3)", flexShrink: 0 }}>
                  <Image src="/IMG/logo.png" alt="TopSafety Logo" fill sizes="44px" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <p style={{ fontWeight: 900, fontSize: "1.25rem", color: "#fff", letterSpacing: "-0.02em", fontFamily: "Inter, sans-serif", lineHeight: 1.1 }}>
                    TopSafety
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-primary-fixed)", fontFamily: "Cairo, sans-serif", marginTop: "2px" }}>
                    قمة السلامة
                  </p>
                </div>
              </Link>
            </div>

            {/* Bottom Brand Info & Socials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
                  {tx.brandDesc}
                </p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.48)", lineHeight: 1.6 }}>
                  {tx.address1}
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: isAr ? "none" : "uppercase", letterSpacing: isAr ? "0" : "0.08em", color: "rgba(255,255,255,0.5)" }}>
                  {tx.connect}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <a
                    href="https://wa.me/201111400982"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.843L0 24l6.31-1.489A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.804 9.804 0 01-5.031-1.384l-.36-.213-3.748.884.886-3.65-.235-.374A9.82 9.82 0 012.18 12C2.18 6.57 6.57 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82s-4.39 9.82-9.82 9.82z"/></svg>
                  </a>
                  <a
                    href="https://m.me/qmtalslamtlanzmtalatfa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Messenger"
                    style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0084FF", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.506 1.558 6.651 4.026 8.835V24l3.807-2.094A12.06 12.06 0 0012 22.2c6.627 0 12-4.925 12-11S18.627 0 12 0zm1.193 14.963l-3.055-3.26-5.963 3.26L10.35 8.79l3.131 3.26 5.887-3.26-6.175 6.173z"/></svg>
                  </a>
                  <a
                    href="tel:+201091664974"
                    aria-label="Call Sales"
                    style={{ width: "38px", height: "38px", borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:sales@TOPSAFTY-EG.com"
                    aria-label="Email"
                    style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "4px" }}>
                <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
                  © {new Date().getFullYear()} TopSafety — قمة السلامة. {tx.rights}.
                </p>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
                  {tx.slogan}
                </p>
              </div>
            </div>
          </div>

          {/* 2/3 Navigation & Quick Inspection CTA Card */}
          <div
            className="w-full lg:w-2/3"
            style={{
              background: "#1a1c1c",
              color: "#f0f1f1",
              borderRadius: "24px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            {/* Top Link Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Column 1: Navigation */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.08em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {tx.nav}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Link
                    href="/"
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {tx.home}
                  </Link>
                  <Link
                    href="/services"
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {tx.services}
                  </Link>
                  <Link
                    href="/contact"
                    style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {tx.contactLink}
                  </Link>
                </div>
              </div>

              {/* Column 2: Core Solutions */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.08em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {tx.servicesCol}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {tx.svcList.map((svc) => (
                    <Link
                      key={svc}
                      href="/services"
                      style={{ color: "rgba(255,255,255,0.68)", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.68)")}
                    >
                      {svc}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Direct Contact */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <p style={{ fontWeight: 700, fontSize: "0.8rem", letterSpacing: isAr ? "0" : "0.08em", textTransform: isAr ? "none" : "uppercase", color: "rgba(255,255,255,0.5)", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {tx.contact}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href="tel:+201091664974" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.9rem" }}>
                    <span dir="ltr" className="inline-block">+20 10 9166 4974</span>
                  </a>
                  <a href="tel:01111400982" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.9rem" }}>
                    <span dir="ltr" className="inline-block">011 1140 0982</span>
                  </a>
                  <a href="mailto:sales@TOPSAFTY-EG.com" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: "0.85rem", wordBreak: "break-all" }}>
                    <span dir="ltr" className="inline-block">sales@TOPSAFTY-EG.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Inspection CTA Bar */}
            <div
              style={{
                paddingTop: "28px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <div style={{ maxWidth: "460px" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                  {tx.ctaTitle}
                </p>
                <p style={{ fontSize: "0.86rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {tx.ctaSub}
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "9999px",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(110,0,0,0.35)",
                  whiteSpace: "nowrap",
                }}
              >
                {tx.ctaBtn}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
