import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Creator from "./pages/Creator";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              onToggleTheme={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            />
          }
        />
        <Route
          path="/creator"
          element={
            <Creator
              theme={theme}
              onToggleTheme={() =>
                setTheme((current) => (current === "dark" ? "light" : "dark"))
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;