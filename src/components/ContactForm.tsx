import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormData } from "@/lib/types";
import { contactFormSchema } from "@/lib/contactFormSchema";

import Heading from "@/components/ui/Heading";
import Button from "./ui/Button";

function ContactForm() {
  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(contactFormSchema) });

  // Form submit handler
  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  // Returned JSX
  return (
    <>
      <Heading as="h3">Contact Form</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            className="bg-stone-950 border border-stone-50"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            className="bg-stone-950 border border-stone-50"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="comment">Comment:</label>
          <input
            id="comment"
            className="bg-stone-950 border border-stone-50"
            {...register("comment")}
          />
          {errors.comment && <p>{errors.comment.message}</p>}
        </div>

        <Button>
          <span>Submit</span>
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
