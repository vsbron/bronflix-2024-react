import { Link } from "react-router-dom";

function Nav() {
  // Returned JSX
  return (
    <nav className="flex flex-col gap-10 my-auto">
      <Link to="/">Home</Link>
      <Link to="/shows">Shows</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
}

export default Nav;
