"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useLang } from "@/context/LanguageContext";

const serviceBlocks = [
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
      checks: [
        "NFPA Compliant Engineering",
        "24/7 Monitoring Ready Systems",
        "Strict Personal & Site Safety Gear",
        "Certified Civil Defense Handover",
      ],
    },
    ar: {
      badge: "التزامنا الجوهري",
      heading: "معايير سلامة لا تقبل المساومة",
      body: "السلامة هي جوهر كل ما نقوم به. يعمل فريقنا ملتزماً بأعلى مستويات معدات السلامة الشخصية والمهنية في الموقع. نؤمن بأن حماية فريق عملنا على أرض الواقع هي الخطوة الأساسية الأولى لحماية منشأتك وأفرادك.",
      checks: [
        "هندسة متوافقة مع معايير NFPA",
        "أنظمة جاهزة للمراقبة على مدار الساعة",
        "التزام كامل بمعدات السلامة الشخصية والميدانية",
        "تسليم معتمد وفق اشتراطات الحماية المدنية",
      ],
    },
    imgLeft: true,
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
      checks: [
        "Complex Multi-Floor Installations",
        "All Heights & Scales",
        "Modern Elevating & Installation Platforms",
        "Precision Pipework & Hydraulic Testing",
      ],
    },
    ar: {
      badge: "معدات متقدمة",
      heading: "معدات حديثة وتنفيذ احترافي",
      body: "تقديم أنظمة إطفاء عالية الجودة يتطلب أدوات متطورة. بالاعتماد على أحدث آلات الرفع والمعدات المتقدمة، يتمكن خبراؤنا من التعامل مع التركيبات المعقدة على أي ارتفاع وبمختلف الأحجام بدقة وثقة تامة.",
      checks: [
        "تركيبات معقدة متعددة الطوابق",
        "جميع الارتفاعات والأحجام",
        "منصات رفع ومعدات تركيب حديثة",
        "اختبارات هيدروليكية وضغط دقيقة للشبكات",
      ],
    },
    imgLeft: false,
  },
  {
    id: "suppression",
    img: "/IMG/img5.jpeg",
    imgAlt: "Fire safety equipment installed in a facility",
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
  },
  {
    id: "pumps-alarms",
    img: "/IMG/img6.jpg",
    imgAlt: "Sophisticated fire control and pump installation",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    en: {
      badge: "Pumps, Control & Maintenance",
      heading: "Fire Pumps, Control Panels & Annual Maintenance",
      body: "From UL/FM fire pump rooms and addressable control panels to scheduled preventive maintenance visits, we guarantee your facility stays compliant and operational 365 days a year.",
      checks: [
        "Electric, Diesel & Jockey Fire Pump Sets",
        "Hydraulic Pressure Calibration & Testing",
        "Periodic Preventive Maintenance Reports",
        "Rapid Emergency Technical Support",
      ],
    },
    ar: {
      badge: "المضخات والصيانة الدورية",
      heading: "غرف المضخات ولوحات التحكم وعقود الصيانة",
      body: "من غرف مضخات الحريق المعتمدة ولوحات التحكم المعنونة إلى زيارات الصيانة الوقائية الدورية، نضمن بقاء منشأتك مطابقة للاشتراطات وجاهزة للعمل على مدار 365 يوماً.",
      checks: [
        "مجموعات مضخات الحريق (كهرباء · ديزل · جوكي)",
        "معايرة واختبار ضغط الشبكات والمضخات",
        "تقارير صيانة وقائية دورية معتمدة",
        "دعم فني واستجابة سريعة للطوارئ",
      ],
    },
    imgLeft: false,
  },
];

const copy = {
  en: {
    notch: "Our Services",
    crumbHome: "Home",
    crumbCurrent: "Services",
    h1: "Comprehensive ",
    h1span: "Fire Safety Solutions",
    sub: "End-to-end engineering, supply, installation, and maintenance of certified fire protection systems across Egypt.",
    ctaH: "Ready to Secure Your Facility?",
    ctaSub: "Schedule a free engineering site inspection and get a custom fire protection quotation.",
    ctaBtn: "Request Free Inspection",
    back: "← Back to Home",
  },
  ar: {
    notch: "خدماتنا المتكاملة",
    crumbHome: "الرئيسية",
    crumbCurrent: "خدماتنا",
    h1: "حلول متكاملة ",
    h1span: "لمكافحة وإنذار الحريق",
    sub: "تصميم وتوريد وتركيب وصيانة جميع أنظمة الحماية من الحرائق في مصر بأعلى المعايير الهندسية المعتمدة.",
    ctaH: "جاهز لتأمين منشأتك؟",
    ctaSub: "احجز معاينة هندسية مجانية لموقعك واحصل على عرض سعر متكامل ومعتمد.",
    ctaBtn: "اطلب معاينة مجانية",
    back: "→ العودة للرئيسية",
  },
};

export default function ServicesPageClient() {
  const { lang, isAr } = useLang();
  const tx = copy[lang];
  const fontFamily = isAr ? "Cairo, sans-serif" : "Inter, sans-serif";

  return (
    <>
      {/* ── 1. INNER PAGE BANNER WITH OVERLAPPING PILL NOTCH (Spec §3.1) ── */}
      <div style={{ position: "relative", width: "100%", fontFamily }}>
        <section
          style={{
            minHeight: "360px",
            paddingTop: "110px",
            paddingBottom: "64px",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/IMG/img5.jpeg"
            alt="TopSafety Fire Protection Services"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(74,0,0,0.92) 0%, rgba(26,28,28,0.84) 100%)",
            }}
          />

          <div className="wrap" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", marginBottom: "14px" }}>
              <Link href="/" style={{ color: "var(--color-primary-fixed)", textDecoration: "none" }}>
                {tx.crumbHome}
              </Link>
              <span>/</span>
              <span>{tx.crumbCurrent}</span>
            </div>

            <h1 className="text-display-lg" style={{ color: "#fff", marginBottom: "1rem" }}>
              {tx.h1}<span style={{ color: "var(--color-primary-fixed)" }}>{tx.h1span}</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8", fontSize: "1rem" }}>
              {tx.sub}
            </p>
          </div>
        </section>

        {/* Overlapping Bottom Pill Notch */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%) translateY(50%)",
            zIndex: 10,
            padding: "8px 26px",
            borderRadius: "9999px",
            background: "#fff",
            color: "var(--color-primary)",
            fontWeight: 800,
            fontSize: "0.8rem",
            letterSpacing: isAr ? "0" : "0.12em",
            textTransform: isAr ? "none" : "uppercase",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            border: "1px solid var(--color-outline-variant)",
            whiteSpace: "nowrap",
          }}
        >
          {tx.notch}
        </div>
      </div>

      {/* ── 2. ALTERNATING 2-COLUMN SERVICE DETAIL BLOCKS (Spec §3.1) ── */}
      <section style={{ padding: "48px 0 32px", background: "#fff", fontFamily }}>
        <div className="wrap">
          {serviceBlocks.map((s, idx) => {
            const sc = s[lang];
            const isLast = idx === serviceBlocks.length - 1;
            return (
              <div
                key={s.id}
                id={s.id}
                style={{
                  padding: "64px 0",
                  borderBottom: isLast ? "none" : "1px solid var(--color-surface-container-high)",
                }}
              >
                <div className="ts-detail-grid">
                  {/* Image Column */}
                  <div
                    className={`group ${s.imgLeft ? "lg:order-1" : "lg:order-2"}`}
                    style={{
                      borderRadius: "20px",
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
                      loading={idx === 0 ? "eager" : "lazy"}
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
                        width: "60px",
                        height: "60px",
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
                        <li key={c} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", paddingBottom: "0.55rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
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
            );
          })}
        </div>
      </section>

      {/* ── 3. CTA BANNER ── */}
      <section style={{ background: "var(--color-surface-container-low)", padding: "72px 0", textAlign: "center", fontFamily }}>
        <div className="wrap" style={{ maxWidth: "680px" }}>
          <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "1rem" }}>
            {tx.ctaH}
          </h2>
          <p style={{ color: "var(--color-secondary)", marginBottom: "2rem", lineHeight: "1.75", fontSize: "1rem" }}>
            {tx.ctaSub}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              {tx.ctaBtn}
            </Link>
            <Link href="/" className="btn-outline" style={{ textDecoration: "none" }}>
              {tx.back}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
