function PosterPreview({
  title = "VICE CITY",
  subtitle = "Sunset Boulevard",
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111111] p-5">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#ff5b6e] via-[#ff9b54] to-[#ffd166] p-5 shadow-[0_0_35px_rgba(255,120,90,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_25%)]" />

        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.45em] text-black/60">
            Vice City
          </p>

          <h3 className="mt-8 text-3xl font-black uppercase tracking-tight text-black">
            {title}
          </h3>

          <p className="mt-3 text-base font-medium text-black/80">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PosterPreview;
