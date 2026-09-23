import aerialImage from "@/assets/aerial-neighborhood.jpg";
import commuterImage from "@/assets/commuter.jpg";
import heroImage from "@/assets/nalarruang-hero.jpg";
import neighborhoodImage from "@/assets/neighborhood.jpg";
import { impactStats } from "@/content/nalarRuang";

const filmstrip = [
  { src: neighborhoodImage, alt: "Jalan lingkungan yang rindang" },
  { src: commuterImage, alt: "Komuter di stasiun MRT Jakarta" },
  { src: aerialImage, alt: "Kawasan hunian dari udara" },
  { src: heroImage, alt: "Kereta melintasi kawasan kota" },
  { src: neighborhoodImage, alt: "Warga berjalan dan bersepeda di lingkungan kota" },
];

export function MissionSection() {
  return (
    <section id="cara-kerja" className="section section-cream mission" data-reveal>
      <div className="section-heading" data-reveal-item>
        <h2>Peta yang memahami cara hidupmu.</h2>
        <p>NalarRuang menggabungkan data spasial dan preferensi gaya hidup untuk membantu kamu memilih hunian berdasarkan bukti, bukan perkiraan.</p>
      </div>
      <div className="filmstrip" data-reveal-item>
        {filmstrip.map((image, index) => (
          <img key={`${image.alt}-${index}`} src={image.src} alt={image.alt} width={1200} height={912} loading="lazy" />
        ))}
      </div>
      <div className="stats-grid" data-reveal>
        {impactStats.map((stat) => (
          <article className="stat-card" key={stat.label} data-reveal-item>
            <strong>{stat.value}</strong><span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}