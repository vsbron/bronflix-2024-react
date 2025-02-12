import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { signUpFormSchema } from "@/lib/formSchemas";
import { SignUpFormData } from "@/lib/types";
import { signUpUser } from "@/redux/reducers/authReducer";
import { auth, db } from "@/utils/firebase";

import AuthForm from "@/components/forms/AuthForm";
import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";
import { doc, serverTimestamp, setDoc } from "@firebase/firestore";

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

  // Getting the navigate and dispatch functions
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form success handler
  const onSubmit = async (data: SignUpFormData) => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Register user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Setting the doc in firebase with initial user data
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: data.name,
        email: data.email,
        createdAt: serverTimestamp(),
        title: "",
        likedMovies: [],
        likedShows: [],
        likedActors: [],
        watchlistMovies: [],
        watchlistShows: [],
      });

      // Updating the state
      dispatch(
        signUpUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (e: unknown) {
      if (e instanceof FirebaseError) {
        console.error(e.message);
        if (e.code === "auth/weak-password") {
          setFormError("Password should be at least 6 characters");
        }
        if (e.code === "auth/email-already-in-use") {
          setFormError("Email already in use. Please use another one");
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
      <AuthForm
        title="CREATE A NEW ACCOUNT"
        submit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        error={formError}
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
      </AuthForm>
    </>
  );
}

export default SignUpForm;
