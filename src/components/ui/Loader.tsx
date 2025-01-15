function Loader() {
  // Returned JSX
  return (
    <div className="min-h-96 relative">
      <div className="absolute-center">
        {/* Loader animation */}
        <div className="w-24 h-24 rounded-full bg-loader-gradient flex justify-center items-center animate-spin">
          <div className="bg-stone-950 w-16 h-16 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
