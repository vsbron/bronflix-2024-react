import FooterHeading from "@/components/footer/FooterHeading";

function FooterSocials() {
  // Returned JSX
  return (
    <div>
      <FooterHeading>Social Accounts</FooterHeading>
      <ul className="m-0 flex sm:flex-col gap-x-10 sm:gap-x-10 gap-y-1">
        <li>
          <a href="" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            X (Twitter)
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            YouTube
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocials;
