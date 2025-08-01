"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import Moving from "@/components/Moving";
import Tourism from "@/components/Tourism";

export default function Presentation() {
  const [selectedOption, setSelectedOption] = useState<
    "tourism" | "moving" | null
  >(null);

  const handleSelect = (option: "tourism" | "moving") => {
    setSelectedOption(option);
  };

  return (
    <>
      {!selectedOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="flex justify-center text-white font-bold text-2xl pb-6">
            We tell you how much it costs.
          </h1>
          <div className="flex flex-row justify-center gap-4 items-center pb-6">
            <h1 className="text-white">Select</h1>
            <HiCursorClick className="invert w-[20px] h-[20px]" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto pb-12">
            <button
              onClick={() => handleSelect("moving")}
              aria-label="moving"
              className="border border-[var(--gray-light)] rounded-2xl p-4 w-full flex flex-col justify-between items-center gap-4 hover:bg-gray-800 hover:duration-300"
            >
              <img
                src="/assets/moving.png"
                alt="moving"
                className="h-[50px] w-auto"
              />
              <h1 className="rounded-full bg-white text-black pr-4 pl-4 p-2">
                Moving
              </h1>
              <div className="text-center sm:text-left">
                <p className="text-white text-sm">
                  Thinking about relocating? Discover how your expenses might
                  change before you move. Use our cost of living calculator to
                  plan smarter and avoid surprises.
                </p>
              </div>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto pb-12">
            <button
              onClick={() => handleSelect("tourism")}
              aria-label="tourism"
              className="border border-[var(--gray-light)] rounded-2xl p-6 w-full flex flex-col justify-between items-center gap-4 hover:bg-gray-800 hover:duration-300"
            >
              <img
                src="/assets/tourism.png"
                alt="tourism"
                className="h-[50px] w-auto"
              />
              <h1 className="bg-white rounded-full text-black pr-4 pl-4 p-2">
                Tourism
              </h1>
              <div className="text-center sm:text-left">
                <p className="text-white text-sm">
                  Planning your next adventure? Estimate how much your trip will
                  cost with our quick and easy cost of living tool — travel
                  prepared and stress-free.
                </p>
              </div>
            </button>
          </div>
        </motion.div>
      )}
      {selectedOption === "moving" && <Moving />}
      {selectedOption === "tourism" && <Tourism />}
    </>
  );
}
