function SceneSelector() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Choose a scene</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {["Sunset", "Night", "Beach", "Downtown"].map((scene) => (
          <button
            key={scene}
            className="rounded-2xl border border-white/10 bg-white/4 p-6 text-left transition hover:border-white/30 hover:bg-white/8"
          >
            <span className="text-sm text-white/50">Scene</span>
            <p className="mt-1 font-semibold">{scene}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default SceneSelector;