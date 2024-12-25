import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./header/Sidebar";
import Wrapper from "./Wrapper";
import BackspaceNavigation from "@/utils/BackspaceNavigation";

function Layout() {
  // Getting the navigation object from the hook
  const navigation = useNavigation();

  // Creating boolean variable based on navigation state
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <div className="bg-stone-950 text-stone-50 flex">
      <BackspaceNavigation />
      <Header />
      <Sidebar />
      <main className="w-screen ml-[7.5rem] min-h-screen">
        <Wrapper>{isLoading ? <Loader /> : <Outlet />}</Wrapper>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
