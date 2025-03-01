import FooterCopyright from "@/components/footer/FooterCopyright";
import FooterLegal from "@/components/footer/FooterLegal";
import FooterLogo from "@/components/footer/FooterLogo";
import FooterNav from "@/components/footer/FooterNav";
import FooterPartners from "@/components/footer/FooterPartners";
import FooterPowered from "@/components/footer/FooterPowered";
import FooterSocials from "@/components/footer/FooterSocials";

function Footer() {
  // Returned JSX
  return (
    <footer className="relative border-t border-main-color mt-20 mr-12 pt-12 pb-8 text-stone-500 text-[1.5rem] grid grid-cols-9 gap-x-4 gap-y-16 overflow-hidden">
      <div className="col-span-2">
        <FooterNav />
      </div>
      <div className="col-span-2">
        <FooterSocials />
      </div>
      <div className="col-span-4 flex flex-col gap-10">
        <FooterPowered />
        <FooterPartners />
      </div>
      <div className="col-span-4 text-[1.3rem] leading-snug">
        <FooterLegal />
      </div>
      <div className="col-span-4 text-[1.3rem] leading-snug">
        <FooterCopyright />
      </div>
      <FooterLogo />
    </footer>
  );
}

export default Footer;
