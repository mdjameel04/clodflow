
import Navbar from "./components/navbar";
import Hero from "./components/hero/Hero";
import Ticker from "./components/Ticker";

export default function Home() {

  return (
    <div>
      <Navbar />

      <Hero/>
      <Ticker/>
    </div>
  );
}