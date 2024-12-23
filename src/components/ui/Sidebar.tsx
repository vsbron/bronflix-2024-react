import Logo from "./Logo";
import Nav from "./Nav";

function Sidebar() {
  // Returned JSX
  return (
    <aside className="fixed left-0 top-0 bottom-0 py-5 px-8 flex flex-col z-30 w-[9rem]">
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
