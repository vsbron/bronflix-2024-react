import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, setDoc } from "@firebase/firestore";

import { signUpFormSchema } from "@/lib/formSchemas";
import { EditProfileFormData } from "@/lib/types";
import { setUserData, useUser } from "@/redux/reducers/userReducer";
import { auth, db } from "@/utils/firebase";

import AuthForm from "@/components/forms/AuthForm";
import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";

function EditProfileForm() {
  // Setting the state for the current form status and error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Getting the user data from redux store
  const { name, email, title, gender, birthday } = useUser();

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  // Getting the navigate and dispatch functions
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form success handler
  const onSubmit = async (data: EditProfileFormData) => {
    // Enable submitting state
    setIsSubmitting(true);

    try {
      // Guard clause
      if (!auth.currentUser) {
        setFormError("No authenticated user found.");
        setIsSubmitting(false);
        return;
      }

      const newUser = {};

      // Setting the doc in firebase and updating the state with new user data
      await setDoc(doc(db, "users", auth.currentUser.uid), newUser);
      dispatch(setUserData(newUser));

      // Redirect after successful sign-up
      navigate("/profile");
    } catch (e: unknown) {
      console.error(e);
      setFormError("Couldn't update your detail due to unknown error");
    } finally {
      // Disabling submitting state
      setIsSubmitting(false);
    }
  };

  // Returned JSX
  return (
    <>
      <AuthForm
        title="EDIT YOUR PROFILE DETAILS"
        submit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        error={formError}
        buttonText="SUBMIT"
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
            defaultValue={name}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Email" />
          <input
            type="text"
            id="email"
            className="input-styles input-wide-styles"
            value={email}
            disabled={true}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Title">
            {err.title && <FormError>({err.title.message})</FormError>}
          </FormLabelError>
          <input
            id="title"
            className="input-styles input-wide-styles"
            {...register("title")}
            placeholder="Enter your title"
            disabled={isSubmitting}
            defaultValue={title}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Gender">
            {err.gender && <FormError>({err.gender.message})</FormError>}
          </FormLabelError>
          <select
            id="gender"
            className="input-styles input-wide-styles"
            {...register("gender")}
            disabled={isSubmitting}
            defaultValue={title}
          >
            <option value="na">N/A</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Birthday">
            {err.birthday && <FormError>({err.birthday.message})</FormError>}
          </FormLabelError>
          <input
            id="birthday"
            type="date"
            className="input-styles input-wide-styles"
            {...register("birthday")}
            disabled={isSubmitting}
          />
        </FormGroup>
      </AuthForm>
    </>
  );
}

export default EditProfileForm;
