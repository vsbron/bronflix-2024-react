import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

function Layout() {
  // Getting the navigation object from the hook
  const navigation = useNavigation();

  // Creating boolean variable based on navigation state
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <div className="bg-stone-950 text-stone-50 flex">
      <Header />
      <Sidebar />
      <main className="w-screen ml-[7.5rem]">
        {isLoading ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
}

export default Layout;
