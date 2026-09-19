import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-[#080808] text-white"
          : "min-h-screen bg-[#f5efe5] text-slate-900"
      }
    >
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero theme={theme} />
      </main>
    </div>
  );
}

export default Home;