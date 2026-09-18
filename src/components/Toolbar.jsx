function Toolbar() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-5">
      <h2 className="font-semibold">Tools</h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/15">
          Reset
        </button>

        <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/80">
          Export
        </button>
      </div>
    </div>
  );
}

export default Toolbar;