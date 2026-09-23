import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/content/nalarRuang";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section section-light faq" data-reveal>
      <div className="section-heading" data-reveal-item><p className="eyebrow">Pertanyaan Umum</p><h2>Hal yang perlu kamu tahu.</h2></div>
      <div className="faq-list" data-reveal-item>{faqs.map((faq, index) => { const expanded = open === index; return <div className="faq-item" key={faq.question}><h3><button type="button" aria-expanded={expanded} aria-controls={`faq-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{faq.question}</span>{expanded ? <Minus size={20} /> : <Plus size={20} />}</button></h3>{expanded ? <p id={`faq-${index}`}>{faq.answer}</p> : null}</div>; })}</div>
    </section>
  );
}