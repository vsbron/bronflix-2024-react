import FooterHeading from "@/components/footer/FooterHeading";

function FooterPartners() {
  // Returned JSX
  return (
    <div>
      <FooterHeading>Partners</FooterHeading>
      <div className="flex gap-10 mt-5">
        <svg width="89" height="30">
          <use href="/set-partners.svg#google"></use>
        </svg>
        <svg width="86" height="30">
          <use href="/set-partners.svg#github"></use>
        </svg>
        <svg width="138" height="30">
          <use href="/set-partners.svg#up-to-date"></use>
        </svg>
      </div>
    </div>
  );
}

export default FooterPartners;
