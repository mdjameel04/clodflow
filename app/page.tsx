
import Navbar from "./components/navbar";
import Hero from "./components/hero/Hero";
import Ticker from "./components/Ticker";
import ProofSection from "./components/ProofSection";
import ThreeSteps from "./components/ThreeSteps";
import ProductSection from "./components/ProductSection";
import Features from "./components/Features";
import Comparison from "./components/Comparison";

export default function Home() {

  return (
    <div>
      <Navbar />

      <Hero/>
      <Ticker/>
      <ProductSection/>
      <ProofSection/>
      <ThreeSteps/>
      <Features/>
      <Comparison/>
    </div>
  );
}