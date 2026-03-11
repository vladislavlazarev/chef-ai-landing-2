import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { FAQ } from "./components/sections/FAQ";
import { DownloadCTA } from "./components/sections/DownloadCTA";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <FAQ />
        <DownloadCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
