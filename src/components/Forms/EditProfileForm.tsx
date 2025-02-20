import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, getDoc, updateDoc } from "@firebase/firestore";

import useModal from "@/context/ModalContext";
import { editProfileFormSchema } from "@/lib/formSchemas";
import { EditProfileFormData } from "@/lib/types";
import { setUserData, useUser } from "@/redux/reducers/userReducer";
import { auth, db } from "@/utils/firebase";

import FormWrap from "@/components/forms/FormWrap";
import {
  FormError,
  FormGroup,
  FormLabelError,
} from "@/components/forms/FormElements";

function EditProfileForm() {
  // Setting the state for the current form status and error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Getting close function from Modal
  const { closeModal } = useModal();

  // Getting the user data from redux store
  const { name, email, title, gender, birthday } = useUser();
  const dateForInput =
    birthday !== "Unknown"
      ? new Date(birthday).toISOString().split("T")[0]
      : new Date().toISOString().split("T");

  // Getting the functions and errors from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileFormSchema),
  });

  // Getting the navigate and dispatch functions
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

      // Getting the current user data
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      // Guard clause
      if (!userSnap.exists()) {
        setFormError("Cannot find user to update");
        setIsSubmitting(false);
      }
      const currentUserData = userSnap.data();

      // Setting updated fields
      const updatedUser = {
        ...currentUserData,
        name: data.name,
        title: data.title,
        gender: data.gender,
        birthday:
          data.birthday !== "" ? new Date(data.birthday).getTime() : "Unknown",
      };

      // Updating the doc in firebase and updating the state with new user data
      await updateDoc(doc(db, "users", auth.currentUser.uid), updatedUser);
      dispatch(setUserData(updatedUser));

      // Close modal
      closeModal();
    } catch (e: unknown) {
      console.error(e);
      setFormError("Couldn't update your details due to unknown error");
    } finally {
      // Disabling submitting state
      setIsSubmitting(false);
    }
  };

  // Returned JSX
  return (
    <>
      <FormWrap
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
            defaultValue={gender}
          >
            <option value="N/A">N/A</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
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
            defaultValue={dateForInput}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <FormLabelError name="Avatar">
            <FormError>(Disabled due storage absence)</FormError>
          </FormLabelError>
          <input
            id="avatar"
            type="file"
            className="input-styles input-wide-styles"
            disabled={true}
          />
        </FormGroup>
      </FormWrap>
    </>
  );
}

export default EditProfileForm;
