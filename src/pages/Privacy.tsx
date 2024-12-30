import Heading from "@/components/Heading";

function Privacy() {
  // Returned JSX
  return (
    <section>
      <Heading>Privacy Policy</Heading>
      <div className="max-w-[100rem]">
        <p>
          At BroNflix, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your information when you
          visit our website, register or log in, and use our contact form. By
          using our services, you agree to the terms of this Privacy Policy.
        </p>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> When you register or log in
            to our website, we collect personal information such as your name,
            email address, and any other details you provide during registration
            or login.
          </li>
          <li>
            <strong>Contact Form Data:</strong> If you contact us through our
            contact form, we may collect the details you provide, including your
            name, email address, phone number, and any message or inquiry you
            submit.
          </li>
          <li>
            <strong>Cookies and System Information:</strong> We use cookies to
            collect data about your system and browsing activity, including your
            IP address, browser type, device information, and pages visited.
            This helps us improve user experience and analyze site usage.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We may use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and improve our services</li>
          <li>
            To respond to your inquiries or requests through the contact form
          </li>
          <li>To authenticate and manage your account</li>
          <li>To personalize your experience on our site</li>
          <li>
            To analyze website performance and enhance user experience through
            cookies and tracking technologies
          </li>
        </ul>

        <Heading as="h2">Data Sharing and Disclosure</Heading>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information in the following
          situations:
        </p>
        <ul>
          <li>
            With trusted third-party service providers who help us operate our
            website and services (e.g., hosting, analytics)
          </li>
          <li>
            To comply with legal obligations, such as responding to legal
            requests or subpoenas
          </li>
          <li>
            In the event of a merger, acquisition, or sale of all or part of our
            business
          </li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect data about
          how you interact with our website. Cookies help us:
        </p>
        <ul>
          <li>Improve website functionality and user experience</li>
          <li>Track browsing behavior to provide personalized content</li>
          <li>
            Collect system information, including your device type, browser, and
            IP address
          </li>
        </ul>
        <p>
          You can manage your cookie preferences through your browser settings.
          However, disabling cookies may impact some features of the site.
        </p>

        <Heading as="h2">Data Security</Heading>
        <p>
          We implement reasonable security measures to protect your personal
          information from unauthorized access or disclosure. While we strive to
          protect your information, no data transmission or storage system is
          100% secure, and we cannot guarantee the absolute security of your
          data.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location and applicable laws, you may have the right
          to access, update, or delete your personal information. If you wish to
          exercise any of these rights, please contact us at [Your Contact
          Email].
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites. We
          recommend reviewing their privacy policies before providing any
          personal information.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13, and we
          do not knowingly collect personal information from children. If we
          become aware that we have inadvertently collected data from a child
          under 13, we will take steps to delete that information.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          changes, we will update the "Effective Date" at the top of this page.
          We encourage you to review this policy periodically to stay informed
          about how we protect your information.
        </p>

        <Heading as="h2">Contact Us</Heading>
        <p>
          If you have any questions or concerns about this Privacy Policy, or
          how we handle your information, please contact us:
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
      </div>
    </section>
  );
}

export default Privacy;
