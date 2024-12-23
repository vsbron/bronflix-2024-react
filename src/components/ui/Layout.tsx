import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  // Returned JSX
  return (
    <div className="bg-stone-950 text-stone-50 h-screen flex flex-col">
      <Header />
      <Sidebar />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
