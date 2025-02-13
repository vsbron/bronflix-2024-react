import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "@firebase/firestore";

import { signInFormSchema } from "@/lib/formSchemas";
import { SignInFormData } from "@/lib/types";
import { signInUser, signOutUser } from "@/redux/reducers/authReducer";
import { setUserData } from "@/redux/reducers/userReducer";
import { auth, db } from "@/utils/firebase";

import AuthForm from "@/components/forms/AuthForm";
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
          email: userCredential.user.email,
        })
      );

      // Getting the user data and setting it to the state
      const docSnap = await getDoc(doc(db, "users", userCredential.user.uid));
      if (docSnap.exists()) {
        dispatch(setUserData(docSnap.data()));
      } else {
        throw new Error("Couldn't get the user data");
      }

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (e: unknown) {
      // Rollback and sign out
      if (auth.currentUser) {
        await signOut(auth);
        dispatch(signOutUser());
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
      <AuthForm
        title="LOG INTO EXISTING ACCOUNT"
        submit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        error={formError}
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
      </AuthForm>
    </>
  );
}

export default SignInForm;
