"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import Moving from "@/components/Moving";
import Tourism from "@/components/Tourism";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-black">
      <Header />
      <main className="flex flex-col mx-auto w-full pt-12 gap-6">
        <section id="presentation">
          <Presentation />
        </section>
        <section id="moving">
          <Moving />
        </section>
        <section id="tourism">
          <Tourism />
        </section>
      </main>
      <Footer />
    </div>
  );
}
