"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Presentation from "./Presentation";
import api from "@/services/api";

export default function Tourism() {
  const [placeToTourism, setPlaceToTourism] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<"presentation" | null>(
    null
  );

  const handleSelect = (option: "presentation") => {
    setSelectedOption(option);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceToTourism(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setApiResponse(null);

    try {
      const response = await api.costOfTravel(placeToTourism);
      setApiResponse(response.text);
    } catch (error) {
      const err = error;
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {apiResponse ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-6 max-w-4xl bg-white rounded-2xl mx-auto p-6"
        >
          <h1 className="text-2xl font-bold text-black">
            Travel Info for {placeToTourism}
          </h1>
          <p className="whitespace-pre-line text-black text-sm text-justify">
            {apiResponse}
          </p>

          <button
            onClick={() => {
              setApiResponse(null);
              setPlaceToTourism("");
            }}
            className="mt-4 rounded-full p-2 px-6 border text-sm hover:border-black hover:bg-black hover:text-white duration-300"
          >
            Search another place
          </button>
        </motion.div>
      ) : !selectedOption ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-6 max-w-5xl bg-white rounded-2xl mx-auto p-6"
        >
          <img
            src="/assets/tourism.png"
            alt="tourism"
            className="h-[50px] w-auto"
          />
          <h1 className="text-black text-3xl font-bold">Tourism Info</h1>
          <h2>
            Type the place you want to travel to in order to know the cost
            (e.g., Country, State, City...)
          </h2>
          <input
            id="placeToTourism"
            name="placeToTourism"
            type="text"
            required
            value={placeToTourism}
            onChange={handleChange}
            disabled={isSubmitting}
            className="px-3 py-2 bg-black text-white border border-black rounded-full text-center"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full p-2 pr-4 pl-4 border text-sm hover:border-black hover:bg-black hover:text-white duration-300"
          >
            {isSubmitting ? "Searching..." : "Search"}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center p-4"
          >
            <button
              onClick={() => handleSelect("presentation")}
              className="text-white bg-black rounded-full p-2 pr-4 pl-4 items-center text-sm hover:bg-white hover:text-black hover:border hover:border-black duration-300"
            >
              Back
            </button>
          </motion.div>
        </motion.form>
      ) : (
        selectedOption === "presentation" && <Presentation />
      )}
    </>
  );
}
