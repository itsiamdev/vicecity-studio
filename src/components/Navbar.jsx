import { Link } from "react-router-dom";

function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <nav
      className={
        isDark
          ? "border-b border-white/10 bg-black/40 backdrop-blur-xl"
          : "border-b border-slate-300 bg-white/80 backdrop-blur-xl"
      }
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className={
            isDark
              ? "text-lg font-bold tracking-[0.2em] text-white"
              : "text-lg font-bold tracking-[0.2em] text-slate-900"
          }
        >
          VICE CITY
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className={
              isDark
                ? "rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                : "rounded-full border border-slate-300 bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-200"
            }
          >
            {isDark ? "Light" : "Dark"}
          </button>

          <Link
            to="/creator"
            className={
              isDark
                ? "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/80"
                : "rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            }
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;