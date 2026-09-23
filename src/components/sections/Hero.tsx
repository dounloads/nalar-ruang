import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/nalarruang-hero.jpg";
import { highlights } from "@/content/nalarRuang";

export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="hero">
        <img src={heroImage} alt="Kawasan Jabodetabek dengan jalur kereta dan cakrawala kota" width={1920} height={1088} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">Platform Pencarian Hunian</p>
          <h1 id="hero-title">Mencari Hunian,<br />Membaca Kota.</h1>
          <a href="#cara-kerja" className="text-link text-link-light">Baca ceritanya <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="highlight-bar" aria-label="Fitur utama">
        <div className="highlight-list">{highlights.map((item) => <span key={item}>{item}</span>)}</div>
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}