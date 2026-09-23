import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MissionSection } from "@/components/sections/MissionSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ExplorerSection } from "@/components/sections/ExplorerSection";
import { ExampleSection } from "@/components/sections/ExampleSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingSection } from "@/components/sections/ClosingSection";
import { Footer } from "@/components/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NalarRuang, Cari Hunian Sesuai Gaya Hidup di Jabodetabek" },
      { name: "description", content: "Temukan hunian ideal di Jabodetabek melalui data spasial, persona gaya hidup, rekomendasi kawasan, dan simulasi perjalanan." },
      { property: "og:title", content: "NalarRuang, Cari Hunian Sesuai Gaya Hidup di Jabodetabek" },
      { property: "og:description", content: "Baca kota melalui data publik dan temukan kawasan hunian yang sesuai dengan cara hidupmu." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  useScrollReveal();
  return (
    <main>
      <Navbar />
      <Hero />
      <MissionSection />
      <PersonaSection />
      <FeaturesSection />
      <ExplorerSection />
      <ExampleSection />
      <FaqSection />
      <ClosingSection />
      <Footer />
    </main>
  );
}
