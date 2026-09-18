import Navbar from "../components/Navbar";
import SceneSelector from "../components/SceneSelector";
import ImageEditor from "../components/ImageEditor";
import PosterPreview from "../components/PosterPreview";
import Toolbar from "../components/Toolbar";

function Creator() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-white/50">
            Vice City Studio
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Create Your Street.
          </h1>

          <p className="mt-4 max-w-2xl text-white/60">
            Choose a scene, customize your visual and create your own
            Vice City-inspired poster.
          </p>
        </div>

        <SceneSelector />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="min-h-150 rounded-3xl border border-white/10 bg-white/3 p-4">
            <ImageEditor />
          </section>

          <aside className="space-y-6">
            <Toolbar />
            <PosterPreview />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Creator;