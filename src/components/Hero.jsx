import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,90,120,0.2),transparent_35%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-white/50">
            GTA VI Inspired Experience
          </p>

          <h1 className="text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
            CREATE
            <br />
            YOUR
            <br />
            <span className="text-white/40">VICE CITY.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            Build your own street poster. Pick a scene, customize the visual,
            add your own style and create something unique.
          </p>

          <Link
            to="/creator"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Start Creating →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;