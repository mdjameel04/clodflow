"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Navbar />
    </div>
  );
}