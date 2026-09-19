import Navbar from "../components/Navbar";
import SceneSelector from "../components/SceneSelector";
import ImageEditor from "../components/ImageEditor";
import PosterPreview from "../components/PosterPreview";
import Toolbar from "../components/Toolbar";

function Creator() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="mx-auto max-w-375 px-6 py-10 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.38em] text-[#ff526b]">
              Vice City Studio
            </p>

            <h1 className="text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl">
              Create Your Street.
            </h1>
          </div>

          <p className="max-w-xl text-sm text-white/60 md:text-right">
            Choose a scene, refine the composition, and build a poster that feels
            like a neon-soaked Los Santos classic.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-linear-to-r from-[#ff4d6d]/10 via-white/3 to-[#ffd166]/10 p-4 shadow-[0_0_40px_rgba(255,81,99,0.08)]">
          <SceneSelector />
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="rounded-[30px] border border-white/10 bg-[#101010] p-3 shadow-[0_0_50px_rgba(0,0,0,0.35)]">
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