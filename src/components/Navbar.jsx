import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-lg font-bold tracking-[0.2em]"
        >
          VICE CITY
        </Link>

        <Link
          to="/creator"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/80"
        >
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;