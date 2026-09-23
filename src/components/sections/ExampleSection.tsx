import { useState } from "react";
import { ratings } from "@/content/nalarRuang";

export function ExampleSection() {
  const [mode, setMode] = useState<"titik" | "wilayah">("titik");
  const summary = mode === "titik"
    ? "Titik ini unggul untuk komuter dan aktivitas sosial, dengan akses kendaraan dan ketenangan yang tetap memadai."
    : "Wilayah ini memiliki akses transportasi yang merata, aktivitas kota yang kuat, dan beberapa kantong hunian tenang.";
  return (
    <section id="contoh-data" className="section section-light example" data-reveal>
      <div className="section-heading" data-reveal-item><p className="eyebrow">Contoh Data</p><h2>Klik, nilai, baru yakin.</h2></div>
      <div className="rating-card" data-reveal-item>
        <div className="rating-header"><div><span className="location-label">Contoh lokasi</span><h3>Blok M, Jakarta Selatan</h3></div><div className="segment" aria-label="Tipe penilaian">{(["titik", "wilayah"] as const).map((item) => <button key={item} type="button" className={mode === item ? "active" : ""} aria-pressed={mode === item} onClick={() => setMode(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}</div></div>
        <div className="rating-grid">{ratings.map((rating) => <div className="rating-row" key={rating.label}><span className={`persona-dot ${rating.color}`} /><span>{rating.label}</span><span className="stars" aria-label={`${rating.value} dari 3 bintang`}>{[1,2,3].map((star) => <span key={star} className={star <= rating.value ? "filled" : ""}>★</span>)}</span></div>)}</div>
        <p className="rating-summary" aria-live="polite">{summary}</p>
      </div>
    </section>
  );
}