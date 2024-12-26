import FooterHeading from "./FooterHeading";

function FooterCopyright() {
  // Returned JSX
  return (
    <>
      <FooterHeading>Copyright</FooterHeading>
      Built by VSBroN as a portfolio project
      <br />
      This project is available on{" "}
      <a href="https://github.com/vsbron/bronflix-2024-react" target="_blank">
        GitHub
      </a>
      <br />© 2024. All rights reserved
    </>
  );
}

export default FooterCopyright;
