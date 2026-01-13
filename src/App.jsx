import "./App.css";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WatchCard from "./components/WatchCard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <HeroSection />
      <FeatureSection />

      <Footer />
    </>
  );
}

export default App;
