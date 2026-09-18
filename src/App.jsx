import Editor from "./components/Editor.jsx";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/50">
            Vice City Studio
          </p>

          <h1 className="text-6xl font-bold tracking-tight">
            Create Your Story.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Design your own cinematic Vice City poster.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
            Start Creating
          </button>

          <div className="mt-12 h-120 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Editor />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;