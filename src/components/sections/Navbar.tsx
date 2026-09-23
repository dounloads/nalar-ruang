import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/content/nalarRuang";
import { PillLink } from "@/components/ui/PillLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigasi utama">
        <Link to="/" className="wordmark">NalarRuang</Link>
        <div className="desktop-nav">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="nav-actions">
          <a className="new-badge" href="#faq">Baru</a>
          <PillLink to="/app">Mulai Cari Hunian</PillLink>
          <button className="menu-button" type="button" aria-label="Buka navigasi" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mobile-nav">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        </div>
      ) : null}
    </header>
  );
}