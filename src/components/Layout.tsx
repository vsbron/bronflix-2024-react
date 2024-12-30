import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./Loader";
import Wrapper from "./Wrapper";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sidebar from "./header/Sidebar";

import BackspaceNavigation from "@/utils/BackspaceNavigation";

function Layout() {
  // Getting the navigation object from the hook
  const navigation = useNavigation();

  // Creating boolean variable based on navigation state
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <div className="text-stone-50 flex max-w-[1920px] mx-auto">
      <BackspaceNavigation />
      <Header />
      <Sidebar />
      <main className="w-screen ml-[7.5rem] min-h-screen overflow-x-hidden">
        <Wrapper>{isLoading ? <Loader /> : <Outlet />}</Wrapper>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
