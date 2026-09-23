import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: AppPlaceholder,
  head: () => ({
    meta: [
      { title: "Visual Explorer Segera Hadir, NalarRuang" },
      { name: "description", content: "Visual Explorer NalarRuang untuk pencarian hunian di Jabodetabek sedang dipersiapkan." },
      { property: "og:title", content: "Visual Explorer Segera Hadir, NalarRuang" },
      { property: "og:description", content: "Visual Explorer NalarRuang sedang dipersiapkan." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/app" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/app" }],
  }),
});

function AppPlaceholder() {
  return <main className="placeholder-page"><Link to="/" className="wordmark">NalarRuang</Link><div><p className="eyebrow">Visual Explorer</p><h1>Segera hadir.</h1><Link to="/" className="text-link">Kembali ke beranda</Link></div></main>;
}