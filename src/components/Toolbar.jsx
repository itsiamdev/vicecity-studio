import { useRef } from "react";

function Toolbar({ onLoadImage, onExport, onDownload, showDownloadButton }) {
  const fileInputRef = useRef(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
      <h2 className="font-semibold uppercase tracking-[0.2em] text-white/70">
        Tools
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={openFilePicker}
          className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/15"
        >
          Încarcă
        </button>

        <button
          onClick={onExport}
          className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
        >
          Exportă
        </button>
      </div>

      {showDownloadButton && (
        <button
          onClick={onDownload}
          className="mt-3 w-full rounded-xl border border-[#ff4d6d] bg-[#ff4d6d]/15 px-4 py-3 text-sm font-semibold text-[#ffb3bd] transition hover:bg-[#ff4d6d]/25"
        >
          Descarcă
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onLoadImage}
      />
    </div>
  );
}

export default Toolbar;