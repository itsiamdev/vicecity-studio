import { useRef } from "react";
import ImageEditor from "@unlayer/react-image-editor";

function StudioImageEditor({ image, onSave }) {
  const editorRef = useRef(null);

  return (
    <div className="h-full min-h-180 overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-[0_0_50px_rgba(255,76,76,0.12)]">
      <ImageEditor
        ref={editorRef}
        image={image}
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
        onSave={({ dataUrl, blob }) => {
          if (onSave) {
            onSave(dataUrl, blob);
          }
        }}
        onCancel={() => console.log("Editing cancelled")}
      />
    </div>
  );
}

export default StudioImageEditor;