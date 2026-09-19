import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageEditor from "../components/ImageEditor";
import PosterPreview from "../components/PosterPreview";
import Toolbar from "../components/Toolbar";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80";

function Creator({ theme, onToggleTheme }) {
  const isDark = theme === "dark";
  const [posterImage, setPosterImage] = useState(DEFAULT_IMAGE);
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPosterImage(objectUrl);
    setShowDownloadButton(false);
  };

  const handleExport = () => {
    setShowDownloadButton(true);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = posterImage;
    link.download = "vice-city-poster.png";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-[#050505] text-white"
          : "min-h-screen bg-[#f4efe7] text-slate-900"
      }
    >
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      <main className="mx-auto max-w-375 px-6 py-10 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className={
                isDark
                  ? "mb-2 text-sm uppercase tracking-[0.38em] text-[#ff526b]"
                  : "mb-2 text-sm uppercase tracking-[0.38em] text-[#b91c4b]"
              }
            >
              GTA Studio Image Editor
            </p>

            <h1
              className={
                isDark
                  ? "text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl"
                  : "text-4xl font-black uppercase tracking-[-0.06em] text-slate-900 md:text-6xl"
              }
            >
              Create Your Street.
            </h1>
          </div>

          <p
            className={
              isDark
                ? "max-w-xl text-sm text-white/60 md:text-right"
                : "max-w-xl text-sm text-slate-600 md:text-right"
            }
          >
            Choose a scene, refine the composition, and build a poster that feels
            like a neon-soaked Los Santos classic.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section
            className={
              isDark
                ? "rounded-[30px] border border-white/10 bg-[#101010] p-3 shadow-[0_0_50px_rgba(0,0,0,0.35)]"
                : "rounded-[30px] border border-slate-200 bg-white p-3 shadow-[0_0_30px_rgba(15,23,42,0.06)]"
            }
          >
            <ImageEditor image={posterImage} onSave={(dataUrl) => setPosterImage(dataUrl)} />
          </section>

          <aside className="space-y-6">
            <Toolbar
              onLoadImage={handleImageUpload}
              onExport={handleExport}
              onDownload={handleDownload}
              showDownloadButton={showDownloadButton}
            />
            <PosterPreview />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Creator;