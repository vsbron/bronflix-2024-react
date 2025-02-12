import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

import { BASE_GAP_CLASS } from "@/lib/constants";
import { signInFormSchema } from "@/lib/formSchemas";
import { SignInFormData } from "@/lib/types";
import { signInUser } from "@/redux/reducers/authReducer";
import { auth } from "@/utils/firebase";

import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";
import Button from "@/components/ui/Button";

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

  // Getting the navigate and dispatch functions
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form success handler
  const onSubmit = async (data: SignInFormData) => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Sign In user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Updating the state
      dispatch(
        signInUser({
          uid: userCredential.user.uid,
          name: userCredential.user.displayName,
          email: userCredential.user.email,
        })
      );

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (e: unknown) {
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
      <h3 className="mb-8 mt-0">LOG INTO EXISTING ACCOUNT</h3>
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

        {/* Error message */}
        {formError && <div className="text-red-500">{formError}</div>}

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
