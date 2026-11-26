import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 55%, #ffdad4 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <div
          style={{
            position: "relative",
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(110, 0, 0, 0.16)",
            boxShadow: "0 12px 32px rgba(110, 0, 0, 0.12)",
            background: "#fff",
          }}
        >
          <Image src="/IMG/logo.png" alt="TopSafety" fill sizes="76px" style={{ objectFit: "cover" }} priority />
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "flex-end", height: "36px" }}>
          {[0, 0.12, 0.24, 0.36, 0.24, 0.12, 0].map((delay, idx) => (
            <span key={idx} className="ts-eq-bar" style={{ animationDelay: `${delay}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
