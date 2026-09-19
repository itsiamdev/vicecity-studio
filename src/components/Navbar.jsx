import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-350 items-center justify-between px-5 md:h-20 md:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#ff7850] to-[#ff5b6e]">
            <span className="font-(family-name:--font-display) text-[10px] font-bold tracking-wider text-white">
              VC
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-(family-name:--font-display) text-sm font-bold uppercase tracking-[0.25em] text-white/90 transition-colors group-hover:text-[#ff9d73]">
              Vice City
            </span>
            <span className="font-(family-name:--font-body) hidden text-[8px] uppercase tracking-[0.35em] text-white/30 sm:block">
              Studio
            </span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white/80"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff7850]" />
            {isDark ? "Dark" : "Light"}
          </button>

          {/* CTA */}
          <Link
            to="/creator"
            className="group/btn relative overflow-hidden rounded-full bg-linear-to-r from-[#ff7850] to-[#ff5b6e] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all hover:shadow-[0_0_30px_rgba(255,91,110,0.3)]"
          >
            <span className="relative z-10">Create</span>
            <span className="absolute inset-0 bg-linear-to-r from-[#ff5b6e] to-[#ff7850] opacity-0 transition-opacity group-hover/btn:opacity-100" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;