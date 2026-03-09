import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { DownloadCTA } from "./components/sections/DownloadCTA";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <DownloadCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
