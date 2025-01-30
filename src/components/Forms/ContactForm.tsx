import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { FormData } from "@/lib/types";
import { EMAILJS_PUBLIC_KEY, PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { contactFormSchema } from "@/lib/contactFormSchema";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function ContactForm() {
  // Setting the state for the current form status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<FormData>({ resolver: zodResolver(contactFormSchema) });

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Form success handler
  const onSubmit = () => {
    // Disable inputs when submission starts
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_CONTACT_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        "#contact-form",
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => navigate("/success"), // Redirect user to success page
        () => navigate("/error-form") // Redirect user to error page
      )
      .finally(() => setIsSubmitting(false)); // Re-enable inputs if needed
  };
  // Returned JSX
  return (
    <>
      <Heading as="h3">Contact Form</Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className={`flex flex-col ${PREVIEWS_GAP_CLASS} items-start`}
      >
        <FormGroup>
          <FormLabelError name="Name">
            {err.name && <FormError>({err.name.message})</FormError>}
          </FormLabelError>
          <input
            id="name"
            className="input-styles"
            {...register("name")}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Age">
            {err.age && <FormError>{err.age.message}</FormError>}
          </FormLabelError>
          <select
            id="age"
            className="input-styles"
            {...register("age")}
            disabled={isSubmitting}
          >
            <option value="">Select your age</option>
            <option value="under 18">Under 18</option>
            <option value="18-34">18-34</option>
            <option value="35-55">35-55</option>
            <option value="over 55">Over 55</option>
          </select>
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Email">
            {err.email && <FormError>({err.email.message})</FormError>}
          </FormLabelError>
          <input
            id="email"
            className="input-styles"
            {...register("email")}
            placeholder="Share your email address"
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Message">
            {err.message && <FormError>({err.message.message})</FormError>}
          </FormLabelError>
          <textarea
            id="message"
            className="input-styles min-w-[35rem] h-36 resize-none"
            {...register("message")}
            placeholder="Write your message here..."
            disabled={isSubmitting}
          />
        </FormGroup>

        <div className={`flex gap-10 ${PREVIEWS_GAP_CLASS}`}>
          <Button type="reset" disabled={isSubmitting}>
            <span>Reset</span>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;

// Helper components
function FormGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-start">{children}</div>;
}
function FormLabelError({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-2">
      <label htmlFor={name.toLowerCase()}>{name}</label>
      {children}
    </div>
  );
}
function FormError({ children }: { children: ReactNode }) {
  return <span className="text-red-300">{children}</span>;
}
