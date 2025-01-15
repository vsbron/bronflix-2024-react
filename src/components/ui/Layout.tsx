import { Outlet, useNavigation } from "react-router-dom";

import BackspaceNavigation from "@/utils/BackspaceNavigation";
import ScrollToTop from "@/utils/ScrollToTop";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/header/Sidebar";
import Loader from "@/components/ui/Loader";
import Wrapper from "@/components/ui/Wrapper";

function Layout() {
  // Getting the navigation object from the hook
  const navigation = useNavigation();

  // Creating boolean variable based on navigation state
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <div className="text-stone-50 flex max-w-[1920px] mx-auto">
      <ScrollToTop />
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
