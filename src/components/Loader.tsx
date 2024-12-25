import Wrapper from "./Wrapper";

function Loader() {
  // Returned JSX
  return (
    <Wrapper className="flex justify-center items-center">
      <div className="w-24 h-24 rounded-full bg-loader-gradient flex justify-center items-center animate-spin">
        <div className="bg-stone-950 w-16 h-16 rounded-full"></div>
      </div>
    </Wrapper>
  );
}

export default Loader;
