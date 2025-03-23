import { Outlet, useNavigation } from "react-router-dom";

import { useResponsive } from "@/hooks/useResponsive";
import { LayoutProps } from "@/lib/types";
import BackspaceNavigation from "@/utils/BackspaceNavigation";
import ScrollToTop from "@/utils/ScrollToTop";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderMobile from "@/components/header/HeaderMobile";
import Sidebar from "@/components/header/Sidebar";
import Loader from "@/components/ui/Loader";
import Wrapper from "@/components/ui/Wrapper";

function Layout({ children }: LayoutProps) {
  // Getting the navigation object from the hook
  const navigation = useNavigation();

  // Getting the media breakpoint
  const { isMD } = useResponsive();

  // Creating boolean variable based on navigation state
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <div className="text-stone-50 flex max-w-[1920px] mx-auto">
      <ScrollToTop />
      <BackspaceNavigation />
      {!isMD ? (
        <>
          <Header />
          <Sidebar />
        </>
      ) : (
        <HeaderMobile />
      )}

      <main className="w-screen ml-0 md:ml-[7.5rem] min-h-screen overflow-x-hidden">
        {children ? (
          children
        ) : (
          <Wrapper>{isLoading ? <Loader /> : <Outlet />}</Wrapper>
        )}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
