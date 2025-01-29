import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormData } from "@/lib/types";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";
import { contactFormSchema } from "@/lib/contactFormSchema";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

function ContactForm() {
  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<FormData>({ resolver: zodResolver(contactFormSchema) });

  // Form submit handler
  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  // Returned JSX
  return (
    <>
      <Heading as="h3">Contact Form</Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Age">
            {err.age && <FormError>{err.age.message}</FormError>}
          </FormLabelError>
          <select id="age" className="input-styles" {...register("age")}>
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
          />
        </FormGroup>

        <Button>
          <span>Submit</span>
        </Button>
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
