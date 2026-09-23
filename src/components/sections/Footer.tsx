import { Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><p className="footer-label">Hubungi Kami</p><p>Sekolah Vokasi IPB<br />Bogor, Jawa Barat, Indonesia</p></div>
        <div><p className="footer-label">Kontak</p><p>Kerja Sama<br /><a href="mailto:kolaborasi@nalaruang.id">kolaborasi@nalaruang.id</a></p><p>Media<br /><a href="mailto:media@nalaruang.id">media@nalaruang.id</a></p></div>
        <div><p className="footer-label">Ikuti</p><div className="socials"><a href="#footer-note" aria-label="Instagram"><Instagram size={19} /></a><a href="#footer-note" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="#footer-note" aria-label="YouTube"><Youtube size={20} /></a></div></div>
      </div>
      <div className="footer-bottom" id="footer-note"><strong>NalarRuang</strong><p>Skor dan rekomendasi merupakan estimasi dari data sekunder publik.</p><span>© 2026</span></div>
    </footer>
  );
}