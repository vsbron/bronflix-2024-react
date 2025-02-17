import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

import { signInFormSchema } from "@/lib/formSchemas";
import { SignInFormData } from "@/lib/types";
import { auth } from "@/utils/firebase";

import FormWrap from "@/components/forms/FormWrap";
import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";

function SignInForm() {
  // Setting the state for the current form status and error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  // Getting the navigate function
  const navigate = useNavigate();

  // Form success handler
  const onSubmit = async (data: SignInFormData) => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Sign In user
      await signInWithEmailAndPassword(auth, data.email, data.password);

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (e: unknown) {
      // Rollback and sign out
      if (auth.currentUser) {
        await signOut(auth);
      }

      if (e instanceof FirebaseError) {
        console.error(e.message);
        if (e.code === "auth/invalid-credential") {
          setFormError("Wrong username or password. Please try again");
        }
      } else {
        console.error(e);
        setFormError("Couldn't sign in due to unknown error");
      }
    } finally {
      // Disabling submitting state
      setIsSubmitting(false);
    }
  };
  // Returned JSX
  return (
    <>
      <FormWrap
        title="LOG INTO EXISTING ACCOUNT"
        submit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        error={formError}
        buttonText="SIGN IN"
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
      </FormWrap>
    </>
  );
}

export default SignInForm;
