import aerialImage from "@/assets/aerial-neighborhood.jpg";
import commuterImage from "@/assets/commuter.jpg";
import neighborhoodImage from "@/assets/neighborhood.jpg";
import { layerCards } from "@/content/nalarRuang";
import { PillLink } from "@/components/ui/PillLink";

const images = { aerial: aerialImage, neighborhood: neighborhoodImage, commuter: commuterImage };

export function ExplorerSection() {
  return (
    <section id="layer-peta" className="section section-dark explorer" data-reveal>
      <div className="section-heading" data-reveal-item><p className="eyebrow eyebrow-muted">Jelajahi Peta</p><h2>Enam layer, satu kota.</h2></div>
      <div className="layer-grid">
        {layerCards.map((layer) => (
          <figure key={layer.title} data-reveal-item><img src={images[layer.image as keyof typeof images]} alt={layer.title} width={1200} height={912} loading="lazy" /><figcaption>{layer.title}</figcaption></figure>
        ))}
      </div>
      <div className="center-action" data-reveal-item><PillLink to="/app" light icon>Lihat Semua Layer</PillLink></div>
      <div className="data-open" data-reveal-item>
        <div><p className="eyebrow eyebrow-muted">Data Terbuka</p><div className="source-list"><span>OpenStreetMap</span><span>Overpass API</span><span>InaRISK</span><span>ATR/BPN</span></div></div>
        <PillLink to="/app" light>Pelajari Sumber Data</PillLink>
      </div>
    </section>
  );
}