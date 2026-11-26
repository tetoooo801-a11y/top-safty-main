import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | TopSafety — خدماتنا | قمة السلامة",
  description:
    "Comprehensive fire protection services in Egypt: suppression & sprinklers, addressable fire alarms, fire pumps, hose cabinets, extinguishers, annual maintenance, and civil defense plans.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
