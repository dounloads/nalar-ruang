import { personas } from "@/content/nalarRuang";

export function PersonaSection() {
  return (
    <section id="persona" className="section section-light" data-reveal>
      <div className="section-heading" data-reveal-item>
        <p className="eyebrow">Kerangka Persona NalarRuang</p>
        <h2>Empat cara memandang satu kota.</h2>
      </div>
      <div className="persona-card" data-reveal-item>
        <div className="venn" role="img" aria-label="Empat persona yang dapat saling beririsan">
          {personas.map((persona) => <div key={persona.name} className={`persona-circle ${persona.className}`}><span>{persona.name}</span></div>)}
          <p>Pilihanmu<br />dapat beririsan</p>
        </div>
      </div>
    </section>
  );
}