import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormData } from "@/lib/types";
import { contactFormSchema } from "@/lib/contactFormSchema";

import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import InputField from "./InputField";
import { PREVIEWS_GAP_CLASS } from "@/lib/constants";

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col ${PREVIEWS_GAP_CLASS} items-start`}
      >
        <InputField
          name="name"
          label="Name"
          register={register}
          errors={errors}
        />

        <div>
          <label htmlFor="age">Age:</label>
          <select
            id="age"
            className="bg-stone-950 border border-stone-50"
            {...register("age")}
          >
            <option value="">Select age</option>
            <option value="under 18">Under 18</option>
            <option value="18-34">18-34</option>
            <option value="35-55">35-55</option>
            <option value="over 55">Over 55</option>
          </select>
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <InputField
          name="email"
          label="Email"
          register={register}
          errors={errors}
        />

        <InputField
          name="message"
          label="Message"
          register={register}
          errors={errors}
        />

        <Button>
          <span>Submit</span>
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
