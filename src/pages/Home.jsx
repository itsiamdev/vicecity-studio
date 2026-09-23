import { AboutSection, FeatureSection, FinalCTA, GallerySection, HomeHero, ScenesSection, StorySection } from "../components/HomeSections";
import { Footer, SiteChrome } from "../components/SiteChrome";

function Home({ theme, onToggleTheme }) {
  return (
    <main className={`site-shell ${theme === "light" ? "dark" : ""}`}>
      <SiteChrome theme={theme} onToggleTheme={onToggleTheme} />
      <HomeHero />
      <StorySection />
      <ScenesSection />
      <FeatureSection />
      <GallerySection />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default Home;
