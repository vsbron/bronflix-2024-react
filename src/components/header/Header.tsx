import { useUser } from "@/redux/reducers/userReducer";

import Authentication from "@/components/header/Authentication";
import Search from "@/components/header/Search";
import User from "@/components/header/User";

function Header() {
  // Getting the user id
  const { uid } = useUser();

  // Returned JSX
  return (
    <header className="absolute top-0 left-1/2 right-0 px-12 my-6 h-[4.725rem] flex justify-end items-center gap-10 opacity-0 pointer-events-none">
      <Search />
      {uid ? <User /> : <Authentication />}
    </header>
  );
}

export default Header;
