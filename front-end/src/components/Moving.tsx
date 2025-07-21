"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Presentation from "./Presentation";

export default function Moving() {
  const [selectedOption, setSelectedOption] = useState<"presentation" | null>(
    null
  );

  const handleSelect = (option: "presentation") => {
    setSelectedOption(option);
  };

  return (
    <>
      {!selectedOption && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-6 max-w-5xl bg-white rounded-2xl mx-auto p-6"
        >
          <img
            src="/assets/moving.png"
            alt="moving"
            className="h-[50px] w-auto"
          />
          <h1 className="text-black text-3xl font-bold">Moving</h1>
          <h2>
            Type the place where you want to know the cost of living (e.g.,
            Country, State, City, ...)
          </h2>
          <input
            type="text"
            name="place"
            id="place"
            className=" px-3 py-2 bg-black text-white border border-black rounded-full text-center"
          />
          <button className="rounded-full p-2 pr-4 pl-4 border text-sm hover:border-black hover:bg-black hover:text-white duration-300">
            Search
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center p-4"
          >
            <button
              onClick={() => handleSelect("presentation")}
              className="text-white bg-black rounded-full p-2 pr-4 pl-4 items-center text-sm hover:bg-white hover:text-black hover:border hover:border-black duration-300 "
            >
              Back
            </button>
          </motion.div>
        </motion.div>
      )}

      {selectedOption === "presentation" && <Presentation />}
    </>
  );
}
