export default function Home() {
  return (
    <main className="min-h-screen text-white flex justify-center px-4 bg-neutral-950">
      <div className="w-full max-w-md space-y-6 py-10">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
          <p className="text-sm opacity-70">Undangan Pernikahan</p>
          <h1 className="text-3xl font-semibold mt-2">Kevin & Yoga</h1>
          <p className="mt-2 text-sm opacity-80">27 September 2026</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
          <h2 className="text-lg mb-2">Menuju Hari Bahagia</h2>
          <p className="text-2xl font-bold">120 Hari Lagi</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
          <h2 className="text-lg">Acara</h2>
          <p>Akad: 08.00 WIB</p>
          <p>Resepsi: 11.00 WIB</p>
          <p>Bandung</p>
        </div>

      </div>
    </main>
  );
}