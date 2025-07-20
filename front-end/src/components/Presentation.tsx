"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Presentation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center gap-6 max-w-2xl mx-auto pb-12"
      >
        <div className="border border-[var(--gray-light)] rounded-md p-4 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="#moving"
            aria-label="moving"
            className="rounded-full bg-white text-black pr-4 pl-4 p-2 hover:bg-black hover:text-white hover:border hover:border-white hover:duration-300"
          >
            Moving?
          </Link>
          <div className="text-center sm:text-left">
            <p className="text-white text-sm">
              Thinking about relocating? Discover how your expenses might change
              before you move. Use our cost of living calculator to plan smarter
              and avoid surprises.
            </p>
          </div>
          <img
            src="/assets/moving.png"
            alt="moving"
            className="h-[50px] w-auto"
          />
        </div>

        <div className="border border-[var(--gray-light)] rounded-md p-4 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="#tourism"
            aria-label="tourism"
            className="bg-white rounded-full text-black pr-4 pl-4 p-2 hover:bg-black hover:text-white hover:border hover:border-white hover:duration-300"
          >
            Tourism?
          </Link>
          <div className="text-center sm:text-left">
            <p className="text-white text-sm">
              Planning your next adventure? Estimate how much your trip will
              cost with our quick and easy cost of living tool — travel prepared
              and stress-free.
            </p>
          </div>
          <img
            src="/assets/tourism.png"
            alt="tourism"
            className="h-[50px] w-auto"
          />
        </div>
        <h1 className="text-white font-bold text-2xl">
          We tell you how much it costs
        </h1>
      </motion.div>
    </>
  );
}
