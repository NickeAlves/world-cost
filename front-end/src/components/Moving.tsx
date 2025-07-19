import { motion } from "framer-motion";

export default function Moving() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center gap-6 max-w-5xl bg-white rounded-2xl mx-auto p-6"
      >
        <h1 className="rounded-full p-2 pr-4 pl-4 bg-black text-white">
          Moving
        </h1>
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
      </motion.div>
    </>
  );
}
