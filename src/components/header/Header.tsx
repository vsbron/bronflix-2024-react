import Search from "./Search";
import User from "./User";

function Header() {
  // Returned JSX
  return (
    <header className="absolute top-0 left-1/2 right-0 px-12 py-4 flex justify-end items-center gap-10">
      <Search />
      <User />
    </header>
  );
}

export default Header;
