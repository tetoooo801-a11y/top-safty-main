"use client";

import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

const PhoneIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const EmailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const copy = {
  en: {
    heroBadge: "Get In Touch",
    crumbHome: "Home",
    crumbCurrent: "Contact Us",
    h1: "Let's Protect ",
    h1span: "Your Facility",
    heroSub: "Fill in the form and we'll reach out within 24 hours to schedule a free site inspection.",
    infoH: "Contact Information",
    infoSub: "Reach our engineering and sales team directly via phone, email, or visit our office.",
    formH: "Send Us a Message",
    formSub: "Share your facility details and requirements for a tailored fire safety quotation.",
    back: "← Back to Home",
    phone: "Phone Lines",
    email: "Email",
    location: "Location",
    locVal: "10th of Ramadan City — Al Urduniyya",
    locVal2: "Mall Al Jawhara, 4th Floor",
  },
  ar: {
    heroBadge: "تواصل معنا",
    crumbHome: "الرئيسية",
    crumbCurrent: "تواصل معنا",
    h1: "لنؤمّن ",
    h1span: "منشأتك معاً",
    heroSub: "أرسل لنا رسالة وسيتواصل معك فريقنا خلال 24 ساعة لتحديد موعد المعاينة المجانية.",
    infoH: "معلومات التواصل",
    infoSub: "تواصل مع فريق الهندسة والمبيعات مباشرة عبر الهاتف أو البريد الإلكتروني أو زيارة مقرنا.",
    formH: "أرسل لنا رسالة",
    formSub: "شاركنا تفاصيل منشأتك ومتطلباتك للحصول على عرض سعر مخصص ومعتمد.",
    back: "→ العودة للرئيسية",
    phone: "خطوط الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    locVal: "العاشر من رمضان — الأردنية",
    locVal2: "مول الجوهرة، الدور الرابع",
  },
};

export default function ContactPageClient() {
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
            src="/IMG/img4.jpeg"
            alt="TopSafety fire protection installation"
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
            <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: "560px", margin: "0 auto", lineHeight: "1.8", fontSize: "1rem" }}>
              {tx.heroSub}
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
          {tx.heroBadge}
        </div>
      </div>

      {/* ── 2. 2-COLUMN EQUAL-HEIGHT CONTACT WORKSPACE (Spec §7.1) ── */}
      <section style={{ padding: "84px 0 80px", background: "var(--color-surface-container-low)", fontFamily }}>
        <div className="wrap">
          <div className="ts-contact-grid">
            {/* Column 1: Inquiry Form Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 36px",
                boxShadow: "0 12px 36px rgba(47,47,47,0.06)",
                border: "1px solid rgba(110,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div style={{ marginBottom: "1.5rem" }}>
                <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "6px", fontFamily }}>
                  {tx.formH}
                </h2>
                <p style={{ color: "var(--color-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {tx.formSub}
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Column 2: Contact Channels & Interactive Map Card */}
            <div
              style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 36px",
                boxShadow: "0 12px 36px rgba(47,47,47,0.06)",
                border: "1px solid rgba(110,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.5rem",
                height: "100%",
              }}
            >
              <div>
                <h2 className="text-headline-md" style={{ color: "var(--color-on-surface)", marginBottom: "6px" }}>
                  {tx.infoH}
                </h2>
                <p style={{ color: "var(--color-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {tx.infoSub}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <ContactCard href="tel:+201091664974" icon={PhoneIcon} label={tx.phone} labelAr="خطوط الهاتف" value="+20 10 9166 4974" value2="011 1140 0982" />
                  <ContactCard href="mailto:sales@TOPSAFTY-EG.com" icon={EmailIcon} label={tx.email} labelAr="البريد الإلكتروني" value="sales@TOPSAFTY-EG.com" />
                  <ContactCard href="https://maps.app.goo.gl/cM3t1n3yLvcJ1JZf7" icon={PinIcon} label={tx.location} labelAr="الموقع" value={tx.locVal} value2={tx.locVal2} />
                </div>
              </div>

              {/* Map embed + Back link */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href="https://maps.app.goo.gl/cM3t1n3yLvcJ1JZf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.1)",
                    border: "2px solid var(--color-primary)",
                    textDecoration: "none",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.01)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 14px 40px rgba(110,0,0,0.18)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)"; }}
                  title="Open in Google Maps"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0!2d31.7!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIwJzAwLjAiTiAzMcKwNDInMDAuMCJF!5e0!3m2!1sar!2seg!4v1000000000000!5m2!1sar!2seg&q=mall+al+jawahara+10th+ramadan+egypt"
                    width="100%"
                    height="190"
                    style={{ border: 0, display: "block", pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقعنا على الخريطة"
                  />
                  <div style={{ background: "var(--color-primary)", color: "#fff", textAlign: "center", padding: "0.65rem", fontSize: "0.84rem", fontWeight: 700, letterSpacing: "0.04em" }}>
                    {isAr ? "افتح في خرائط Google" : "Open in Google Maps"}
                  </div>
                </a>

                <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--color-primary)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", width: "fit-content" }}>
                  {tx.back}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
