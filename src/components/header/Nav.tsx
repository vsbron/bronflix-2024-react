import { Link } from "react-router-dom";
import {
  FilmIcon,
  HomeIcon,
  TvIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { NavItemProps } from "@/lib/types";

function Nav() {
  // Returned JSX
  return (
    <nav className="flex flex-col gap-16 my-auto">
      <Link to="/">
        <NavItem icon={<HomeIcon />} title="Home" />
      </Link>
      <Link to="/shows">
        <NavItem icon={<TvIcon />} title="Shows" />
      </Link>
      <Link to="/movies">
        <NavItem icon={<FilmIcon />} title="Movies" />
      </Link>
      <Link to="/people">
        <NavItem icon={<UserIcon />} title="People" />
      </Link>
    </nav>
  );
}

export default Nav;

// Link Item element
function NavItem({ icon, title }: NavItemProps) {
  // Returned JSX
  return (
    <div className="flex gap-6 whitespace-nowrap items-center text-stone-50 hover:text-red-500 transition-colors duration-200">
      <span className="block basis-[2.5rem] flex-shrink-0">{icon}</span>
      <span className="sidebar__nav-title">{title}</span>
    </div>
  );
}
