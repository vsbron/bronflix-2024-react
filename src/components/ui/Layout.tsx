import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  // Returned JSX
  return (
    <div className="bg-stone-950 text-stone-50 h-screen flex">
      <Header />
      <Sidebar />
      <main className="h-screen w-screen ml-[7.5rem]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
