import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Creator from "./pages/Creator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;