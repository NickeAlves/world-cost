"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Presentation from "@/components/Presentation";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex flex-col mx-auto w-full pt-12 gap-6">
        <ScrollToTopButton />

        <Presentation />
      </main>
      <Footer />
    </div>
  );
}
