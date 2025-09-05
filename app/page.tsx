import Navigation from "@/components/Navigation";
import BackgroundEffects from "@/components/BackgroundEffects";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <BackgroundEffects />
      <Navigation />
      <ThemeToggle />
      <BackToTop />
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}