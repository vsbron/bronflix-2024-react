import Heading from "@/components/ui/Heading";
import Wrapper from "@/components/ui/Wrapper";
import ProceedOptions from "@/components/errorBoundary/ProceedOptions";
import Header from "@/components/header/Header";
import Sidebar from "@/components/header/Sidebar";
import Footer from "@/components/footer/Footer";

function ErrorBoundary() {
  // Returned JSX
  return (
    <div className="text-stone-50 flex max-w-[1920px] mx-auto">
      <Header />
      <Sidebar />
      <main className="w-screen ml-[7.5rem] min-h-screen overflow-x-hidden">
        <Wrapper>
          <section>
            <Heading>Error</Heading>
            <div>
              We apologize. Looks like we encountered some kind of error...
            </div>
            <ProceedOptions />
          </section>
        </Wrapper>
        <Footer />
      </main>
    </div>
  );
}
export default ErrorBoundary;
