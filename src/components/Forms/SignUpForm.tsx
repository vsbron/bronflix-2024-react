import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { signUpFormSchema } from "@/lib/formSchemas";
import { SignUpFormData } from "@/lib/types";
import { auth } from "@/utils/firebase";

import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";
import Button from "@/components/ui/Button";

function SignUpForm() {
  // Setting the state for the current form status and error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  // Getting the navigate function from useNavigate hook
  const navigate = useNavigate();

  // Form success handler
  const onSubmit = async (data: SignUpFormData) => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Register user
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (error: unknown) {
      console.error(error);
      setFormError("An error occurred while signing up. Please try again.");
    } finally {
      // Disabling submitting state
      setIsSubmitting(false);
    }
  };

  // Returned JSX
  return (
    <>
      <h3 className="mb-8 mt-0">CREATE A NEW ACCOUNT</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="sign-up-form"
        className={`flex flex-col ${BASE_GAP_CLASS} items-start`}
      >
        <FormGroup>
          <FormLabelError name="Name">
            {err.name && <FormError>({err.name.message})</FormError>}
          </FormLabelError>
          <input
            id="name"
            className="input-styles input-wide-styles"
            {...register("name")}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </FormGroup>

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

        <FormGroup>
          <FormLabelError name="Confirm Password">
            {err.confirmPassword && (
              <FormError>({err.confirmPassword.message})</FormError>
            )}
          </FormLabelError>
          <input
            type="password"
            id="confirmPassword"
            className="input-styles input-wide-styles"
            {...register("confirmPassword")}
            placeholder="Enter your password again"
            disabled={isSubmitting}
          />
        </FormGroup>

        <div className={`flex gap-10 ${BASE_GAP_CLASS} mt-4`}>
          <Button type="submit" disabled={isSubmitting}>
            <span>Submit</span>
          </Button>
        </div>
        {formError && <p className="text-red-500">{formError}</p>}
      </form>
    </>
  );
}

export default SignUpForm;
