"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";
import { useLang } from "@/context/LanguageContext";

/* ─── Alternating Detail Sections (Preserved Content) ─── */
const detailSections = [
  {
    id: "commitment",
    img: "/IMG/img1.jpeg",
    imgAlt: "TopSafety worker in full safety gear on site",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    en: {
      badge: "Our Core Commitment",
      heading: "Uncompromising Safety Standards",
      body: "Safety is the core of everything we do. Our team operates strictly with the highest level of personal and site safety gear. We believe that protecting our workforce on the ground is the essential first step in protecting your facility and your people.",
      checks: ["NFPA Compliant Engineering", "24/7 Monitoring Ready Systems"],
    },
    ar: {
      badge: "التزامنا الجوهري",
      heading: "معايير سلامة لا تقبل المساومة",
      body: "السلامة هي جوهر كل ما نقوم به. يعمل فريقنا ملتزماً بأعلى مستويات معدات السلامة الشخصية والمهنية في الموقع. نؤمن بأن حماية فريق عملنا على أرض الواقع هي الخطوة الأساسية الأولى لحماية منشأتك وأفرادك.",
      checks: ["هندسة متوافقة مع معايير NFPA", "أنظمة جاهزة للمراقبة على مدار الساعة"],
    },
    imgLeft: true,
    bg: "#fff",
  },
  {
    id: "equipment",
    img: "/IMG/img2.jpeg",
    imgAlt: "Workers on elevating machinery for fire system installation",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    en: {
      badge: "Advanced Equipment",
      heading: "Advanced Execution & Equipment",
      body: "Delivering top-tier fire safety systems requires top-tier tools. Equipped with cutting-edge elevating machinery and advanced platforms, our experts handle complex installations at any height and scale with total precision and confidence.",
      checks: ["Complex Multi-Floor Installations", "All Heights & Scales"],
    },
    ar: {
      badge: "معدات متقدمة",
      heading: "معدات حديثة وتنفيذ احترافي",
      body: "تقديم أنظمة إطفاء عالية الجودة يتطلب أدوات متطورة. بالاعتماد على أحدث آلات الرفع والمعدات المتقدمة، يتمكن خبراؤنا من التعامل مع التركيبات المعقدة على أي ارتفاع وبمختلف الأحجام بدقة وثقة تامة.",
      checks: ["تركيبات معقدة متعددة الطوابق", "جميع الارتفاعات والأحجام"],
    },
    imgLeft: false,
    bg: "var(--color-surface-container-low)",
  },
  {
    id: "environments",
    img: "/IMG/img5.jpeg",
    imgAlt: "Fire safety equipment installed in a hospital environment",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    en: {
      badge: "Specialized Solutions",
      heading: "Supply & Installation of All Fire Protection Systems",
      body: "We offer a complete range of fire safety services tailored to every facility type — from early detection to full suppression systems and annual maintenance contracts.",
      checks: [
        "Supply & installation of all fire suppression, sprinkler, and hydrant systems",
        "Conventional and addressable fire alarm systems",
        "Supply & installation of all types of fire pumps and maintenance",
        "Supply & installation of fire hose cabinets",
        "Supply of all fire extinguisher types: powder, gas, and foam",
        "Annual maintenance contracts with periodic inspections throughout the year",
        "Fire plan drawing, approval, and evacuation plan design for factories, hotels, and schools",
      ],
    },
    ar: {
      badge: "حلول متخصصة",
      heading: "توريد وتركيب جميع انظمة مكافحة الحرائق",
      body: "نقدم مجموعة متكاملة من خدمات السلامة من الحرائق المصممة لكل نوع من المنشآت — من الكشف المبكر إلى أنظمة الإطفاء الكاملة وعقود الصيانة السنوية.",
      checks: [
        "توريد وتركيب جميع انظمة الاطفاء والرش الآلي وخطوط الحريق",
        "انظمة الانذار المبكر للحريق العادي والمعنون",
        "توريد وتركيب جميع انواع مضخات الحريق والصيانة",
        "توريد وتركيب صناديق إطفاء الحريق",
        "توريد جميع انواع طفايات الحريق البودرة والغاز والرغوة",
        "عقود صيانة سنوية تتضمن زيارة دورية على مدار العام يتم فحص النظام",
        "رسم واعتماد مخططات الحريق وخطط الاخلاء للمصانع والفنادق والمدارس",
      ],
    },
    imgLeft: true,
    bg: "#fff",
  },
];

/* ─── Elastic Services Accordion Items (Spec §1.4) ─── */
const elasticServices = [
  {
    num: "01",
    img: "/IMG/img5.jpeg",
    en: {
      title: "Suppression & Sprinklers",
      desc: "Complete supply and installation of automatic sprinkler networks, hydrants, and gas/foam suppression systems.",
    },
    ar: {
      title: "أنظمة الإطفاء والرش الآلي",
      desc: "توريد وتركيب شبكات الرش الآلي وخطوط الحريق وأنظمة الإطفاء بالغاز والرغوة بأعلى كفاءة.",
    },
  },
  {
    num: "02",
    img: "/IMG/img4.jpeg",
    en: {
      title: "Early Warning Fire Alarms",
      desc: "Conventional and addressable fire alarm panels engineered for instant zone detection and rapid alert response.",
    },
    ar: {
      title: "أنظمة الإنذار المبكر",
      desc: "لوحات إنذار حريق عادية ومعنونة مصممة لاكتشاف الحريق مبكراً وتحديد المنطقة بدقة فورية.",
    },
  },
  {
    num: "03",
    img: "/IMG/img6.jpg",
    en: {
      title: "Fire Pumps & Hose Cabinets",
      desc: "High-capacity UL/FM fire pump rooms, booster sets, and certified fire hose cabinets installed to code.",
    },
    ar: {
      title: "مضخات وصناديق الحريق",
      desc: "توريد وتركيب غرف مضخات الحريق المعتمدة وصناديق إطفاء الحريق وجميع أنواع الطفايات.",
    },
  },
  {
    num: "04",
    img: "/IMG/img1.jpeg",
    en: {
      title: "Maintenance & Civil Defense",
      desc: "Annual preventive maintenance contracts, fire plan engineering drawings, and evacuation plan approvals.",
    },
    ar: {
      title: "الصيانة واعتماد الحماية المدنية",
      desc: "عقود صيانة سنوية مع زيارات دورية، ورسم واعتماد مخططات الحريق وخطط الإخلاء.",
    },
  },
];

/* ─── Gallery Thumbnails (Spec §1.5) ─── */
const galleryItems = [
  {
    src: "/IMG/img4.jpeg",
    alt: "Organized fire system components and pipework",
    enLabel: "Main Riser & Valve Manifold",
    arLabel: "شبكة المواسير والمحابس الرئيسية",
  },
  {
    src: "/IMG/img6.jpg",
    alt: "Sophisticated fire control system installation",
    enLabel: "High-Pressure Fire Pump Room",
    arLabel: "غرفة مضخات الحريق عالية الضغط",
  },
  {
    src: "/IMG/img3.jpeg",
    alt: "Certified fire safety equipment installation",
    enLabel: "Certified Field Installation",
    arLabel: "تجهيز وتركيب الأنظمة الميدانية",
  },
  {
    src: "/IMG/WhatsApp Image 2026-04-23 at 11.54.33 PM.jpeg",
    alt: "TopSafety completed industrial fire protection project",
    enLabel: "Industrial Facility Handover",
    arLabel: "تسليم مشروع منشأة صناعية",
  },
];

const copy = {
  en: {
    badge: "Excellence in Fire Protection",
    h1a: "TopSafety: ",
    h1b: "Your First Line of Defense",
    sub: "We provide comprehensive fire safety solutions — from site assessment to civil defense handover. Your facility's safety is our top priority.",
    cta1: "Get a Free Inspection",
    cta2: "View Our Work",
    ctaRowTag: "NFPA & Civil Defense Compliant",
    ctaRowText: "Schedule a free engineering site inspection and receive a tailored fire protection blueprint for your facility.",
    ctaRowBtn: "Book Site Inspection",
    stats: [
      { from: 0, to: 99.9, decimals: 1, suffix: "%", label: "System Uptime" },
      { from: 0, to: 500, decimals: 0, suffix: "+", label: "Projects Done" },
      { from: 50, to: 0, decimals: 0, suffix: "ms", label: "Response Lag" },
      { from: 0, to: 24, decimals: 0, suffix: "/7", label: "Technical Support" },
    ],
    storyEyebrow: "Engineering Trust Across Egypt",
    storyTitle: "Comprehensive Protection for Every Facility",
    storyBody: "From industrial factories in 10th of Ramadan City to hospitals, hotels, and commercial towers across Egypt — TopSafety engineers, supplies, installs, and maintains certified fire protection systems built for zero-failure performance.",
    sectors: ["Factories & Industrial", "Hospitals & Clinics", "Hotels & Resorts", "Schools & Universities", "Warehouses & Logistics", "Commercial Towers"],
    elasticTitle: "Core Fire Protection Services",
    elasticSub: "Click or browse our four integrated pillars of facility fire safety.",
    sysLabel: "System Architecture",
    sysH: "Sophisticated System Architecture",
    sysPara: "We don't just install systems; we engineer solutions. Every pipe, valve, and control unit is meticulously structured for optimal performance and rapid response during critical moments.",
    sysBtn: "Get a Free Inspection",
    miniStats: [
      ["NFPA", "Standards"],
      ["UL / FM", "Certified Gear"],
      ["100%", "Civil Defense Ready"],
    ],
    ctaBannerH: "Ready to Secure Your Facility?",
    ctaBannerSub: "Contact us today for a free site inspection and custom quotation.",
    ctaBannerBtn: "Contact Us Now",
  },
  ar: {
    badge: "قمة في حماية الحريق",
    h1a: "قمة السلامة: ",
    h1b: "خط دفاعك الأول",
    sub: "نقدم لك حلولاً متكاملة لتأمين مشروعك بأعلى معايير الجودة والسلامة — من دراسة الموقع حتى التسليم للحماية المدنية. سلامة مكانك وأفرادك مسؤوليتنا الأولى.",
    cta1: "احصل على معاينة مجانية",
    cta2: "تصفح أعمالنا",
    ctaRowTag: "متوافق مع الحماية المدنية و NFPA",
    ctaRowText: "احجز معاينة هندسية مجانية لموقعك واحصل على دراسة فنية وعرض سعر متكامل لأنظمة الإطفاء والإنذار.",
    ctaRowBtn: "احجز معاينة مجانية",
    stats: [
      { from: 0, to: 99.9, decimals: 1, suffix: "%", label: "وقت تشغيل النظام" },
      { from: 0, to: 500, decimals: 0, suffix: "+", label: "مشروع منجز" },
      { from: 50, to: 0, decimals: 0, suffix: "ms", label: "تأخير الاستجابة" },
      { from: 0, to: 24, decimals: 0, suffix: "/7", label: "دعم فني متواصل" },
    ],
    storyEyebrow: "خبرة هندسية في جميع أنحاء مصر",
    storyTitle: "حماية متكاملة لكل منشأة ومشروع",
    storyBody: "من المصانع في العاشر من رمضان إلى المستشفيات والفنادق والمدارس والمباني الإدارية في جميع أنحاء مصر — تتولى قمة السلامة التصميم والتوريد والتركيب والصيانة الدورية وفقاً لأعلى المعايير المعتمدة.",
    sectors: ["المصانع والمنشآت الصناعية", "المستشفيات والمراكز الطبية", "الفنادق والمنتجعات", "المدارس والجامعات", "المخازن والمستودعات", "الأبراج الإدارية والتجارية"],
    elasticTitle: "خدماتنا المتكاملة لمكافحة الحريق",
    elasticSub: "استكشف ركائزنا الأساسية الأربعة لتأمين منشأتك بالكامل.",
    sysLabel: "البنية الهندسية",
    sysH: "تصميمات هندسية دقيقة ومتطورة",
    sysPara: "نحن لا نقوم بتركيب الأنظمة فحسب، بل نبتكر حلولاً هندسية. يتم تخطيط كل أنبوب وصمام ووحدة تحكم بدقة متناهية لضمان الأداء الأمثل والاستجابة السريعة.",
    sysBtn: "احصل على معاينة مجانية",
    miniStats: [
      ["NFPA", "مطابق للمعايير"],
      ["UL / FM", "معدات معتمدة"],
      ["100%", "جاهز للحماية المدنية"],
    ],
    ctaBannerH: "جاهز لتأمين منشأتك؟",
    ctaBannerSub: "تواصل معنا اليوم للحصول على معاينة مجانية وعرض سعر مخصص.",
    ctaBannerBtn: "تواصل معنا الآن",
  },
};

export default function HomePage() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  const [activeService, setActiveService] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);

  const handlePrevService = () =>
    setActiveService((prev) => (prev - 1 + elasticServices.length) % elasticServices.length);
  const handleNextService = () =>
    setActiveService((prev) => (prev + 1) % elasticServices.length);

  return (
    <>
      {/* ── 1. FULL-SCREEN STATIC HERO ─────────────────────────── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "5.5rem",
          paddingBottom: "3.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontFamily,
        }}
      >
        {/* Full-bleed Background Image */}
        <Image
          src="/IMG/img1.jpeg"
          alt="TopSafety Fire Protection"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />

        {/* Brand Crimson / Dark Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,28,28,0.88) 0%, rgba(74,0,0,0.62) 55%, rgba(26,28,28,0.42) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Centered Hero Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "680px", margin: "0 auto", paddingLeft: "12px", paddingRight: "12px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.38rem 1rem", background: "rgba(255,255,255,0.92)", borderRadius: "9999px", marginBottom: "1rem", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}>
            <span style={{ width: "0.45rem", height: "0.45rem", borderRadius: "50%", background: "var(--color-primary)" }} className="animate-pulse" />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: isAr ? "0" : "0.12em", textTransform: isAr ? "none" : "uppercase", color: "var(--color-primary)" }}>
              {tx.badge}
            </span>
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.65rem, 4.2vw, 2.75rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "0.9rem",
              textShadow: "0 4px 20px rgba(0,0,0,0.38)",
            }}
          >
            {tx.h1a}<span style={{ color: "var(--color-primary-fixed)" }}>{tx.h1b}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.85rem, 2.2vw, 1.02rem)",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "540px",
              margin: "0 auto 1.5rem",
              lineHeight: 1.7,
            }}
          >
            {tx.sub}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", justifyContent: "center", alignItems: "center" }}>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                padding: "0.68rem 1.45rem",
                borderRadius: "9999px",
                background: "var(--color-primary)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                boxShadow: "0 8px 22px rgba(0,0,0,0.32)",
                whiteSpace: "nowrap",
              }}
            >
              {tx.cta1}
            </Link>
            <Link
              href="/services"
              style={{
                textDecoration: "none",
                padding: "0.65rem 1.4rem",
                borderRadius: "9999px",
                color: "#ffffff",
                border: "1.5px solid rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
                fontWeight: 700,
                fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                whiteSpace: "nowrap",
              }}
            >
              {tx.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* ── ASYMMETRIC SPLIT CTA ROW ─────────────────────────── */}
      <section style={{ background: "var(--color-surface)", paddingTop: "48px", paddingBottom: "8px", fontFamily }}>
        <div className="wrap">
          <div className="ts-cta-grid">
            {/* Column 1: Featured Site Image + Floating Tag */}
            <div style={{ height: "280px", borderRadius: "20px", position: "relative", overflow: "hidden", boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}>
              <Image
                src="/IMG/img2.jpeg"
                alt="TopSafety engineering installation team"
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,28,28,0.65) 0%, transparent 55%)" }} />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  insetInlineStart: "20px",
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  color: "var(--color-primary)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}
              >
                {tx.ctaRowTag}
              </div>
            </div>

            {/* Column 2: Action Box */}
            <div
              style={{
                minHeight: "280px",
                borderRadius: "20px",
                padding: "32px",
                background: "#fff",
                border: "1px solid var(--color-outline-variant)",
                boxShadow: "0 12px 32px rgba(47,47,47,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "var(--color-primary-fixed)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <p style={{ color: "var(--color-on-surface)", fontSize: "0.95rem", fontWeight: 500, lineHeight: 1.7 }}>
                {tx.ctaRowText}
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  background: "var(--color-primary)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.86rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(110,0,0,0.22)",
                }}
              >
                {tx.ctaRowBtn}
                <span>{isAr ? "←" : "→"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS & CENTERED STORY CARD (Spec §1.3) ── */}
      <section style={{ padding: "72px 0", background: "var(--color-surface)", fontFamily }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px", alignItems: "center" }}>
          {/* 4-Column Stats Grid (Animated Counters) */}
          <div className="ts-stats-grid" style={{ width: "100%" }}>
            {tx.stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "24px 16px",
                  border: "1px solid rgba(110,0,0,0.06)",
                  boxShadow: "0 6px 20px rgba(47,47,47,0.04)",
                }}
              >
                <p style={{ fontSize: "2.25rem", fontWeight: 800, color: "var(--color-primary)", lineHeight: 1, marginBottom: "8px", fontFamily: "Inter, sans-serif" }}>
                  <StatCounter from={stat.from} to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-secondary)", letterSpacing: isAr ? "0" : "0.04em" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Story Card (max-width: 860px) */}
          <div
            style={{
              width: "100%",
              maxWidth: "860px",
              padding: "44px 40px",
              borderRadius: "28px",
              background: "#fff",
              border: "1px solid var(--color-outline-variant)",
              boxShadow: "0 16px 48px rgba(47,47,47,0.06)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: isAr ? "0" : "0.14em", textTransform: isAr ? "none" : "uppercase", color: "var(--color-primary)", marginBottom: "12px" }}>
              {tx.storyEyebrow}
            </span>
            <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "16px" }}>
              {tx.storyTitle}
            </h2>
            <p style={{ color: "var(--color-secondary)", maxWidth: "600px", margin: "0 auto 28px", lineHeight: 1.8, fontSize: "0.95rem" }}>
              {tx.storyBody}
            </p>

            {/* Infinite Sectors Marquee */}
            <div style={{ width: "100%", overflow: "hidden", direction: "ltr", paddingTop: "8px" }}>
              <div className="ts-marquee-track" style={{ gap: "12px" }}>
                {[0, 1].map((dup) => (
                  <div key={dup} style={{ display: "flex", gap: "12px", paddingRight: "12px" }}>
                    {tx.sectors.map((sec) => (
                      <span
                        key={`${dup}-${sec}`}
                        style={{
                          padding: "8px 18px",
                          borderRadius: "9999px",
                          background: "var(--color-surface-container-low)",
                          color: "var(--color-on-surface)",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          border: "1px solid rgba(110,0,0,0.08)",
                        }}
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HORIZONTAL ELASTIC ACCORDION — SERVICES (Spec §1.4) ── */}
      <section id="services" style={{ padding: "72px 0", background: "#fff", fontFamily }}>
        <div className="wrap">
          {/* Header Bar with Arrow Controls */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", marginBottom: "36px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: isAr ? "0" : "0.14em", textTransform: isAr ? "none" : "uppercase", color: "var(--color-primary)", display: "block", marginBottom: "8px" }}>
                {isAr ? "خدمات قمة السلامة" : "TopSafety Capabilities"}
              </span>
              <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)" }}>
                {tx.elasticTitle}
              </h2>
              <p style={{ color: "var(--color-secondary)", fontSize: "0.92rem", marginTop: "6px" }}>
                {tx.elasticSub}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Link
                href="/services"
                style={{
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  border: "1.5px solid var(--color-primary)",
                  color: "var(--color-primary)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {isAr ? "صفحة الخدمات الكاملة" : "All Services"} {isAr ? "←" : "→"}
              </Link>
              <div className="hidden md:flex" style={{ gap: "10px" }}>
              <button
                type="button"
                onClick={isAr ? handleNextService : handlePrevService}
                aria-label="Previous service"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--color-outline-variant)",
                  background: "#fff",
                  color: "var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                {isAr ? "→" : "←"}
              </button>
              <button
                type="button"
                onClick={isAr ? handlePrevService : handleNextService}
                aria-label="Next service"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--color-primary)",
                  background: "var(--color-primary)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                }}
              >
                {isAr ? "←" : "→"}
              </button>
              </div>
            </div>
          </div>

          {/* 4-Card Elastic Track */}
          <div className="ts-elastic">
            {elasticServices.map((item, idx) => {
              const isActive = activeService === idx;
              const content = item[lang];
              return (
                <div
                  key={item.num}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setActiveService(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveService(idx);
                    }
                  }}
                  className={`ts-elastic-card ${isActive ? "is-active" : ""}`}
                  style={{
                    boxShadow: isActive ? "0 20px 48px rgba(110,0,0,0.22)" : "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={content.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Crimson / Dark Scrim */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isActive
                        ? "linear-gradient(to top, rgba(74,0,0,0.92) 0%, rgba(26,28,28,0.45) 55%, rgba(26,28,28,0.15) 100%)"
                        : "linear-gradient(to top, rgba(26,28,28,0.85) 0%, rgba(26,28,28,0.45) 100%)",
                      transition: "background 0.35s ease",
                    }}
                  />

                  {/* Expanded Content (always visible on mobile, active on desktop) */}
                  <div
                    className={isActive ? "opacity-100 translate-y-0" : "opacity-100 md:opacity-0 md:translate-y-4"}
                    style={{
                      position: "absolute",
                      inset: 0,
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      gap: "8px",
                      transition: "opacity 0.35s ease, transform 0.35s ease",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "fit-content",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        background: "var(--color-primary-fixed)",
                        color: "var(--color-primary)",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {item.num}
                    </span>
                    <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.25 }}>
                      {content.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", lineHeight: 1.65, maxWidth: "480px" }}>
                      {content.desc}
                    </p>
                  </div>

                  {/* Idle Vertical Index Number (desktop inactive only) */}
                  {!isActive && (
                    <span
                      className="hidden md:block"
                      style={{
                        position: "absolute",
                        bottom: "28px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        writingMode: "vertical-rl",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        fontFamily: "Inter, sans-serif",
                        zIndex: 2,
                      }}
                    >
                      {item.num}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. ALTERNATING 2-COLUMN SERVICE DETAIL BLOCKS (Spec §3.1) ── */}
      <div>
        {detailSections.map((s) => {
          const sc = s[lang];
          return (
            <section key={s.id} id={s.id} style={{ background: s.bg, padding: "80px 0", fontFamily }}>
              <div className="wrap">
                <div className="ts-detail-grid">
                  {/* Image Column */}
                  <div
                    className={`group ${s.imgLeft ? "lg:order-1" : "lg:order-2"}`}
                    style={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 20px 56px rgba(0,0,0,0.11)",
                      position: "relative",
                      aspectRatio: "4/3",
                    }}
                  >
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      fill
                      loading="lazy"
                      className="img-zoom"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 960px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content Column */}
                  <div
                    className={s.imgLeft ? "lg:order-2" : "lg:order-1"}
                    style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background: "var(--color-primary-fixed)",
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "4px",
                      }}
                    >
                      {s.icon}
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: isAr ? "0" : "0.14em", textTransform: isAr ? "none" : "uppercase", color: "var(--color-primary)" }}>
                      {sc.badge}
                    </span>
                    <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)" }}>
                      {sc.heading}
                    </h2>
                    <p style={{ color: "var(--color-secondary)", lineHeight: "1.8", fontSize: "0.96rem" }}>
                      {sc.body}
                    </p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginTop: "0.5rem" }}>
                      {sc.checks.map((c) => (
                        <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", paddingBottom: "0.45rem", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                          <span style={{ width: "1.4rem", height: "1.4rem", marginTop: "2px", borderRadius: "50%", background: "var(--color-primary-fixed)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20,6 9,17 4,12" />
                            </svg>
                          </span>
                          <span style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--color-on-surface)", lineHeight: 1.55 }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── 5. INTERACTIVE THUMBNAIL SWITCHER — SYSTEM ARCHITECTURE (Spec §1.5) ── */}
      <section style={{ background: "var(--color-primary)", padding: "80px 0", fontFamily }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "center" }}>
          {/* Main Landscape Stage */}
          <div
            style={{
              width: "100%",
              height: "clamp(300px, 42vw, 480px)",
              borderRadius: "28px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 56px rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <Image
              src={galleryItems[activeGallery].src}
              alt={galleryItems[activeGallery].alt}
              fill
              sizes="(max-width: 1240px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(74,0,0,0.65) 0%, transparent 55%)" }} />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                insetInlineEnd: "20px",
                padding: "8px 20px",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.94)",
                color: "var(--color-primary)",
                fontSize: "0.82rem",
                fontWeight: 700,
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              }}
            >
              {isAr ? galleryItems[activeGallery].arLabel : galleryItems[activeGallery].enLabel}
            </div>
          </div>

          {/* 4-Thumbnail Selector Strip */}
          <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
            {galleryItems.map((item, idx) => {
              const selected = activeGallery === idx;
              return (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveGallery(idx)}
                  aria-label={isAr ? item.arLabel : item.enLabel}
                  style={{
                    position: "relative",
                    height: "clamp(72px, 10vw, 112px)",
                    borderRadius: "18px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: selected ? "3px solid #fff" : "2px solid rgba(255,255,255,0.22)",
                    opacity: selected ? 1 : 0.65,
                    transform: selected ? "scale(1.02)" : "scale(1)",
                    transition: "opacity 0.25s, transform 0.25s, border-color 0.25s",
                    padding: 0,
                    background: "transparent",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="25vw"
                    style={{ objectFit: "cover" }}
                  />
                </button>
              );
            })}
          </div>

          {/* Centered Copy + 3-Column Mini-Stats + CTA */}
          <div style={{ width: "100%", paddingTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: isAr ? "0" : "0.14em", textTransform: isAr ? "none" : "uppercase", color: "var(--color-primary-fixed)", marginBottom: "8px" }}>
              {tx.sysLabel}
            </span>
            <h2 className="text-headline-md" style={{ color: "#fff", marginBottom: "12px" }}>
              {tx.sysH}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: "660px", marginBottom: "28px", lineHeight: 1.8, fontSize: "0.95rem" }}>
              {tx.sysPara}
            </p>

            {/* 3-Column Inline Mini-Stats Pill Box */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
                margin: "0 auto 28px",
                padding: "16px 36px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {tx.miniStats.map(([val, lbl], i) => (
                <div
                  key={val}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingInlineEnd: i < tx.miniStats.length - 1 ? "24px" : 0,
                    borderInlineEnd: i < tx.miniStats.length - 1 ? "1px solid rgba(255,255,255,0.22)" : "none",
                  }}
                >
                  <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem", fontFamily: "Inter, sans-serif" }}>{val}</span>
                  <span style={{ color: "var(--color-primary-fixed)", fontSize: "0.78rem", fontWeight: 600 }}>{lbl}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                color: "var(--color-primary)",
                padding: "14px 36px",
                borderRadius: "9999px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.92rem",
                boxShadow: "0 10px 28px rgba(0,0,0,0.24)",
              }}
            >
              {tx.sysBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ────────────────────────────────── */}
      <section style={{ background: "var(--color-surface-container-high)", padding: "80px 0", textAlign: "center", fontFamily }}>
        <div className="wrap" style={{ maxWidth: "680px" }}>
          <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "1rem" }}>
            {tx.ctaBannerH}
          </h2>
          <p style={{ color: "var(--color-secondary)", marginBottom: "2rem", lineHeight: "1.75", fontSize: "1rem" }}>
            {tx.ctaBannerSub}
          </p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            {tx.ctaBannerBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
