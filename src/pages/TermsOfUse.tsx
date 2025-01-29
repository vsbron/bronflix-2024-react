import { Helmet } from "react-helmet-async";

import { META_TERMS_DESC, META_TERMS_TITLE } from "@/lib/metaTags";

import ContentWall from "@/components/ui/ContentWall";
import Heading from "@/components/ui/Heading";

function TermsOfUse() {
  // Returned JSX
  return (
    <>
      {/* Meta data */}
      <Helmet>
        <title>{META_TERMS_TITLE}</title>
        <meta name="description" content={META_TERMS_DESC} />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/*Content */}
      <section>
        <Heading>Terms of Use</Heading>
        <ContentWall>
          <p>
            Welcome to BroNflix. By accessing or using our website, you agree to
            comply with these Terms of Use and our Privacy Policy. If you do not
            agree with these terms, please do not use our website.
          </p>

          <Heading as="h3">1. Acceptance of Terms</Heading>
          <p>
            By accessing or using BroNflix, you agree to be bound by these Terms
            of Use and any applicable laws and regulations. If you do not agree
            to these terms, you should not use our website or services.
          </p>

          <Heading as="h3">2. Use of the Website</Heading>
          <p>
            You may use the website for personal, non-commercial purposes only.
            You are prohibited from using the website for illegal purposes or
            violating any applicable local, state, or international laws.
          </p>

          <Heading as="h3">3. User Account</Heading>
          <p>
            To use certain features of the website, you may need to register for
            an account. You agree to provide accurate, current, and complete
            information during the registration process and to keep your account
            information up to date.
          </p>

          <Heading as="h3">4. Prohibited Activities</Heading>
          <p>You agree not to engage in the following activities:</p>
          <ul>
            <li>Spamming or sending unsolicited communications</li>
            <li>Attempting to gain unauthorized access to the website</li>
            <li>
              Engaging in any activity that could harm or disrupt the website
            </li>
            <li>Uploading or distributing malicious software</li>
            <li>Violating copyright or intellectual property rights</li>
          </ul>

          <Heading as="h3">5. Intellectual Property</Heading>
          <p>
            All content, features, and functionality on the website are the
            exclusive property of BroNflix or its licensors. You may not use,
            copy, or distribute any of the content without prior written
            permission from us.
          </p>

          <Heading as="h3">6. Disclaimers and Limitation of Liability</Heading>
          <p>
            The website and its content are provided "as is" without any
            warranties of any kind, either express or implied. We do not
            guarantee the accuracy, completeness, or reliability of any content
            on the website. We are not liable for any damages resulting from the
            use or inability to use the website.
          </p>

          <Heading as="h3">7. Termination</Heading>
          <p>
            We reserve the right to suspend or terminate your access to the
            website at any time, with or without notice, if we believe you have
            violated these Terms of Use or for any other reason.
          </p>

          <Heading as="h3">8. Third-Party Links</Heading>
          <p>
            Our website may contain links to third-party websites. We do not
            control or endorse these sites, and we are not responsible for their
            content or privacy practices.
          </p>

          <Heading as="h3">9. Governing Law</Heading>
          <p>
            These Terms of Use are governed by the laws of [Your Country/State],
            and any disputes arising from these terms will be resolved in the
            courts of [Your Jurisdiction].
          </p>

          <Heading as="h3">10. Changes to Terms</Heading>
          <p>
            We may update or change these Terms of Use from time to time. Any
            changes will be posted on this page, and the "Effective Date" will
            be updated. We encourage you to review these terms periodically.
          </p>

          <Heading as="h2">Contact Us</Heading>
          <p>
            If you have any questions or concerns about these Terms of Use,
            please contact us:
          </p>
          <ul>
            <li>
              <strong>BroNflix</strong>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@vsbronflix.netlify.app">
                info@vsbronflix.netlify.app
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+16195551212">+1 (619) 555-12-12</a>
            </li>
          </ul>
        </ContentWall>
      </section>
    </>
  );
}

export default TermsOfUse;
