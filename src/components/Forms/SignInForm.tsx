import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { signInFormSchema } from "@/lib/formSchemas";
import { SignInFormData } from "@/lib/types";

import Button from "@/components/ui/Button";
import { FormError, FormGroup, FormLabelError } from "./FormElements";

function SignInForm() {
  // Setting the state for the current form status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Form success handler
  const onSubmit = () => {
    // Disable inputs when submission starts
    setIsSubmitting(true);
    try {
    } catch {
    } finally {
      setIsSubmitting(false);
    }
  };
  // Returned JSX
  return (
    <>
      <h3 className="mb-8 mt-0">SIGN IN FORM</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="sign-in-form"
        className={`flex flex-col ${BASE_GAP_CLASS} items-start`}
      >
        <FormGroup>
          <FormLabelError name="Email">
            {err.email && <FormError>({err.email.message})</FormError>}
          </FormLabelError>
          <input
            type="text"
            id="email"
            className="input-styles input-wide-styles"
            {...register("email")}
            placeholder="Enter your email address"
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Password">
            {err.password && <FormError>({err.password.message})</FormError>}
          </FormLabelError>
          <input
            type="password"
            id="password"
            className="input-styles input-wide-styles"
            {...register("password")}
            placeholder="Enter your password"
            disabled={isSubmitting}
          />
        </FormGroup>

        <div className={`flex gap-10 ${BASE_GAP_CLASS} mt-4`}>
          <Button type="submit" disabled={isSubmitting}>
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
