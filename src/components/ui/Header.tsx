import Search from "./Search";
import User from "./User";

function Header() {
  // Returned JSX
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-950 px-12 py-8 flex justify-end gap-10">
      <Search />
      <User />
    </header>
  );
}

export default Header;
