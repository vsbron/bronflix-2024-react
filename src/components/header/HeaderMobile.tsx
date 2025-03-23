import { useUser } from "@/redux/reducers/userReducer";

import Authentication from "@/components/header/Authentication";
import Search from "@/components/header/Search";
import User from "@/components/header/User";

function HeaderMobile() {
  // Getting the user id
  const { uid } = useUser();

  // Returned JSX
  return (
    <header className="absolute top-0 left-1/4 lg:left-1/2 right-0 px-12 my-6 h-[4.725rem] flex justify-end items-center gap-10"></header>
  );
}

export default HeaderMobile;
