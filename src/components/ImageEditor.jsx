import ImageEditor from "@unlayer/react-image-editor";

function StudioImageEditor() {
  const posterImage =
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="h-full min-h-[720px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-[0_0_50px_rgba(255,76,76,0.12)]">
      <ImageEditor
        image={posterImage}
        minHeight={700}
        style={{
          width: "100%",
          height: "100%",
          background: "#0d0d0d",
        }}
        options={{
          theme: "dark",
          features: {
            imageEditor: {
              dock: "left",
            },
          },
        }}
        onSave={({ dataUrl }) => {
          console.log("Poster saved:", dataUrl);
        }}
        onCancel={() => console.log("Editing cancelled")}
      />
    </div>
  );
}

export default StudioImageEditor;