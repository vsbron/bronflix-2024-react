import FooterHeading from "@/components/footer/FooterHeading";

function FooterLegal() {
  // Returned JSX
  return (
    <>
      <FooterHeading>Legal info</FooterHeading>
      <div className="max-xs:text-[.5rem]">
        Any redistribution or reproduction of part or all of the contents in any
        form is prohibited.
        <br />
        You may not, except with our express written permission, distribute or
        commercially exploit the content.
        <br />
        Nor may you transmit it or store it in any other website or other form
        of electronic retrieval system.
        <br />
        This app uses TMDB and the TMDB APIs but is not endorsed, certified, or
        otherwise approved by TMDB.
      </div>
    </>
  );
}

export default FooterLegal;
