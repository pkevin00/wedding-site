"use client";
import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen text-white bg-neutral-950 flex justify-center px-4">

      {opened && (
  <button
    onClick={toggleMusic}
    className="
      fixed bottom-5 right-5
      bg-white/10 border border-white/20
      backdrop-blur-lg
      p-3 rounded-full
      text-sm
      opacity-70 hover:opacity-100
      transition
    "
  >
    {playing ? "🔊" : "🔇"}
  </button>
)}

    </main>
  );
}