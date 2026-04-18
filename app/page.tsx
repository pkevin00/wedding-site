"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
  const saved = localStorage.getItem("guestbook");
  if (saved) {
    setGuestbook(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  const targetDate = new Date("2026-09-27");

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysLeft(days);
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <main className="min-h-screen text-white bg-neutral-950 flex justify-center px-4 relative overflow-hidden">

      <div className="fixed inset-0 -z-10">
  <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
</div>

      {/* OPENING */}
      {!opened && (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black flex items-center justify-center z-50"
  > 

    <button
      onClick={() => setOpened(true)}
      className="bg-white text-black px-6 py-3 rounded-full"
    >
      Buka Undangan
    </button>
  </motion.div>
)}

      {/* CONTENT */}
      {opened && (
  <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }}
  className="w-full max-w-md py-14 space-y-5 text-center"
>

    {/* HERO */}
   <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }}
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
>
  <p className="text-xs tracking-[0.2em] uppercase opacity-50">
    Undangan Pernikahan
  </p>

  <h1 className="text-3xl mt-4 font-semibold leading-snug">
    Kevin & Yoga
  </h1>

  <p className="mt-3 text-sm opacity-70 tracking-wide">
    27 September 2026
  </p>
</motion.div>

    {/* COUNTDOWN */}
    <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }}
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
>
  <p className="text-xs uppercase tracking-widest opacity-50">
    Menuju Hari Bahagia
  </p>

  <p className="text-3xl font-semibold mt-3 tracking-wide">
    {daysLeft} Hari
  </p>
</motion.div>

    {/* EVENT */}
    <motion.div
  variants={{
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }}
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
>
  <h2 className="text-sm uppercase tracking-widest opacity-50 mb-3">
    Acara
  </h2>

  <div className="space-y-1 text-sm">
    <p>Akad: 08.00 WIB</p>
    <p>Resepsi: 11.00 WIB</p>
    <p className="opacity-70">Bandung</p>
  </div>
</motion.div>

  </motion.div>
)}

    </main>
  );
}