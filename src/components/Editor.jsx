import ImageEditor from "@unlayer/react-image-editor";

export default function Editor() {
  return (
    <div className="h-full w-full">
      <ImageEditor
        image="https://images.unsplash.com/photo-1519608487953-e999c86e7455"
        options={{
          theme: "dark",
        }}
        onSave={({ dataUrl }) => {
          console.log("Poster saved:", dataUrl);
        }}
      />
    </div>
  );
}