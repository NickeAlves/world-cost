"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      <Header />
      <main className="flex-grow mx-auto w-full px-4 pt-24">
        <div className="flex flex-col justify-center items-center gap-6 max-w-2xl mx-auto">
          <div className="rounded-xl border border-black/20 bg-white p-4 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="rounded-full bg-black text-white pr-4 pl-4 p-2">
              Moving?
            </h1>
            <div className="text-center sm:text-left">
              <p className="text-[var(--gray-light)] text-sm">
                Thinking about relocating? Discover how your expenses might
                change before you move. Use our cost of living calculator to
                plan smarter and avoid surprises.
              </p>
            </div>
            <img
              src="/assets/moving.png"
              alt="moving"
              className="h-[50px] w-auto"
            />
          </div>

          <div className="rounded-xl border border-black/20 bg-white p-4 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="bg-black rounded-full text-white pr-4 pl-4 p-2">
              Tourism?
            </h1>
            <div className="text-center sm:text-left">
              <p className="text-[var(--gray-light)] text-sm">
                Planning your next adventure? Estimate how much your trip will
                cost with our quick and easy cost of living tool — travel
                prepared and stress-free.
              </p>
            </div>
            <img
              src="/assets/tourism.png"
              alt="tourism"
              className="h-[50px] w-auto"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
