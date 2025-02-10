import { BASE_GAP_CLASS } from "@/lib/constants";
import { signInFormSchema } from "@/lib/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { SignInFormData } from "@/lib/types";

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
      <Heading as="h3">SIGN IN FORM</Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact-form"
        className={`flex flex-col ${BASE_GAP_CLASS} items-start`}
      >
        <FormGroup>
          <FormLabelError name="Email">
            {err.email && <FormError>({err.email.message})</FormError>}
          </FormLabelError>
          <input
            id="name"
            className="input-styles"
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
            id="name"
            className="input-styles"
            {...register("password")}
            placeholder="Enter your password"
            disabled={isSubmitting}
          />
        </FormGroup>

        <div className={`flex gap-10 ${BASE_GAP_CLASS}`}>
          <Button type="reset" disabled={isSubmitting}>
            <span>Reset</span>
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            <span>Submit</span>
          </Button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;

// Helper components
function FormGroup({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-start">{children}</div>;
}
function FormLabelError({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-2">
      <label htmlFor={name.toLowerCase()}>{name}</label>
      {children}
    </div>
  );
}
function FormError({ children }: { children: ReactNode }) {
  return <span className="text-red-300">{children}</span>;
}
