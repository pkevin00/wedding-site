"use client";
import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen text-white bg-neutral-950 flex justify-center px-4">

      {!opened && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <button
            onClick={() => setOpened(true)}
            className="bg-white text-black px-6 py-3 rounded-full"
          >
            Buka Undangan
          </button>
        </div>
      )}

      {opened && (
        <div className="w-full max-w-md py-10">
          <h1 className="text-center text-3xl">Aldi & Sinta</h1>
        </div>
      )}

    </main>
  );
}