import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = -rect.top / window.innerHeight;
        setOffset(scrollPercent * 80);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh items-end overflow-hidden bg-black"
    >
      {/* Background Image with Ken Burns */}
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=85)`,
          transform: `scale(1.05) translateY(${offset * 0.3}px)`,
        }}
      />

      {/* Multi-layer Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(255,120,80,0.25), transparent 60%)",
        }}
      />

      {/* Scan Line Effect */}
      <div className="scan-line absolute inset-0 overflow-hidden pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-32 md:pb-24 md:pt-40">
        {/* Top Label */}
        <div className="mx-auto max-w-350 px-5 md:px-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-12 bg-linear-to-r from-[#ff7850] to-transparent" />
            <span className="font-(family-name:--font-body) text-[10px] font-semibold uppercase tracking-[0.45em] text-[#ff9d73]">
              Vice City Studio
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="mx-auto max-w-350 px-5 md:px-8">
          <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em] text-white">
            <span className="block">Create</span>
            <span className="block">Your</span>
            <span className="block text-sunset-gradient">Own Vice</span>
          </h1>
        </div>

        {/* Bottom Row: Description + CTA + Side Card */}
        <div className="mx-auto mt-10 grid max-w-350 gap-8 px-5 md:mt-14 md:grid-cols-[1fr_auto] md:items-end md:px-8">
          {/* Left: Description + CTA */}
          <div className="max-w-xl">
            <p className="font-body text-base leading-relaxed text-white/55 md:text-lg">
              Craft cinematic poster art for a city that never sleeps—sunset
              streets, neon nights, and electric energy shaped by your own
              vision.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/creator"
                className="group/cta relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.18em] text-black transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span className="relative z-10">Create Your Own Vice</span>
                <span className="absolute inset-0 bg-linear-to-r from-[#ff7850] to-[#ff5b6e] opacity-0 transition-opacity group-hover/cta:opacity-100 group-hover/cta:text-white" />
                <svg
                  className="relative z-10 ml-3 h-4 w-4 transition-transform group-hover/cta:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:border-white/30 hover:bg-white/5 hover:text-white/80"
              >
                Explore Scenes
              </a>
            </div>
          </div>

          {/* Right: Floating Preview Card */}
          <div className="hidden md:block">
            <div className="glass-panel w-75 overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/30 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-3/4 overflow-hidden rounded-[1.2rem] bg-[#111]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&q=80)`,
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-[#ff7850]/10" />
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/8 bg-black/40 p-3 backdrop-blur-md">
                  <span className="font-(family-name:--font-body) text-[9px] uppercase tracking-[0.4em] text-[#ffbd9c]">
                    Golden Hour
                  </span>
                  <h3 className="font-(family-name:--font-display) mt-1.5 text-lg font-bold uppercase tracking-[-0.04em] text-white">
                    Sunset Drive
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mx-auto mt-12 flex max-w-350 items-center gap-4 px-5 md:mt-16 md:px-8">
          <div className="relative h-px w-20 overflow-hidden bg-white/10">
            <div className="animate-scroll-line absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-[#ff7850] to-transparent" />
          </div>
          <span className="font-(family-name:--font-body) text-[9px] uppercase tracking-[0.4em] text-white/25">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
