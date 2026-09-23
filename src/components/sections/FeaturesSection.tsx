import { ArrowUpRight } from "lucide-react";
import aerialImage from "@/assets/aerial-neighborhood.jpg";
import commuterImage from "@/assets/commuter.jpg";
import neighborhoodImage from "@/assets/neighborhood.jpg";
import { featureCards } from "@/content/nalarRuang";

const images = { aerial: aerialImage, neighborhood: neighborhoodImage, commuter: commuterImage };

export function FeaturesSection() {
  return (
    <section className="section section-light features" data-reveal>
      <div className="section-heading" data-reveal-item>
        <p className="eyebrow">Fitur Utama</p><h2>Tiga cara menjelajah.</h2>
      </div>
      <div className="feature-grid">
        {featureCards.map((feature) => (
          <article className="feature-card" key={feature.title} data-reveal-item>
            <img src={images[feature.image as keyof typeof images]} alt={`Pratinjau ${feature.title}`} width={1200} height={912} loading="lazy" />
            <div className="feature-copy"><h3>{feature.title}</h3><p>{feature.description}</p><a href="#contoh-data" className="text-link">Pelajari lebih lanjut <ArrowUpRight size={16} /></a></div>
          </article>
        ))}
      </div>
    </section>
  );
}