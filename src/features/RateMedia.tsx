function RateMedia({ name }: any) {
  // Returned JSX
  return (
    <>
      <h3 className="text-4xl mb-8 mt-0">Rate {name}</h3>
      <div className="flex justify-center gap-10">
        <span className="inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors">
          1
        </span>
        <span className="inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors">
          2
        </span>
        <span className="inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors">
          3
        </span>
        <span className="inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors">
          4
        </span>
        <span className="inline-block border border-red-700 p-3 rounded-md leading-none cursor-pointer hover:bg-red-700 transition-colors">
          5
        </span>
      </div>
    </>
  );
}

export default RateMedia;
