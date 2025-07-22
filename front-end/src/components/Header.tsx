export default function Header() {
  return (
    <>
      <div className="w-full top-0 left-0 z-50 transition-all duration-300 border-b border-white">
        <div className="flex flex-row items-center justify-center p-2 text-white">
          <img
            src="/assets/icons8-mundo-96.png"
            alt="logo"
            className="h-[50px] p-1"
          />
          <h1 className="text-3xl font-bold">World Cost</h1>
        </div>
      </div>
    </>
  );
}
