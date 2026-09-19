import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [["STORY", "#story"], ["SCENES", "#scenes"], ["CREATE", "/creator"], ["ABOUT", "#about"]];

export function SiteChrome({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme !== "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <Link to="/" className="brand-mark" aria-label="Vice City Studio home"><span>VICE CITY</span><small>STUDIO</small></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label, href]) => href.startsWith("#") ? <a key={label} href={href}>{label}</a> : <Link key={label} to={href}>{label}</Link>)}</nav>
      <div className="site-nav-actions">
        <button type="button" className="theme-button" onClick={onToggleTheme}>{isDark ? "LIGHT" : "DARK"}</button>
        <Link to="/creator" className="nav-cta">CREATE YOUR VICE <ArrowUpRight size={16} /></Link>
      </div>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, href]) => href.startsWith("#") ? <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a> : <Link key={label} to={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
    </header>
  );
}

export function Footer() {
  return <footer className="footer"><div className="footer-main"><Link to="/" className="brand-mark"><span>VICE CITY</span><small>STUDIO</small></Link><nav>{links.map(([label, href]) => href.startsWith("#") ? <a key={label} href={href}>{label}</a> : <Link key={label} to={href}>{label}</Link>)}</nav></div><div className="footer-bottom"><span>AN ORIGINAL CREATIVE WEB EXPERIENCE</span><span>© 2026 VICE CITY STUDIO</span></div></footer>;
}
