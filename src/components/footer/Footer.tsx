import FooterCopyright from "./FooterCopyright";
import FooterLegal from "./FooterLegal";
import FooterLogo from "./FooterLogo";
import FooterNav from "./FooterNav";
import FooterPartners from "./FooterPartners";
import FooterPowered from "./FooterPowered";
import FooterSocials from "./FooterSocials";

function Footer() {
  // Returned JSX
  return (
    <footer className="relative border-t border-stone-700 mt-20 mr-12 pt-12 pb-8 text-stone-500 text-[1.5rem] grid grid-cols-9 gap-x-4 gap-y-16 overflow-hidden">
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
