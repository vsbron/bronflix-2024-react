import Authentication from "@/components/header/Authentication";
import Search from "@/components/header/Search";
import User from "@/components/header/User";

function Header() {
  // isLoggedIn constant for testing
  const isLoggedIn = false;

  // Returned JSX
  return (
    <header className="absolute top-0 left-1/2 right-0 px-12 my-6 h-[4.725rem] flex justify-end items-center gap-10">
      <Search />
      {isLoggedIn ? <User /> : <Authentication />}
    </header>
  );
}

export default Header;
