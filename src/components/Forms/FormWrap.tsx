import { BASE_GAP_CLASS } from "@/lib/constants";
import { FormWrapProps } from "@/lib/types";

import Button from "@/components/ui/Button";

function FormWrap({
  children,
  title,
  submit,
  isSubmitting,
  error,
  buttonText,
}: FormWrapProps) {
  // Returned JSX
  return (
    <>
      <h3 className="mb-8 mt-0 text-4xl">{title}</h3>
      <form
        onSubmit={submit}
        className={`flex flex-col ${BASE_GAP_CLASS} items-start`}
      >
        {children}
        {/* Error message */}
        {error && <div className="text-red-500">{error}</div>}

        <div className={`flex gap-10 ${BASE_GAP_CLASS} mt-4`}>
          <Button type="submit" disabled={isSubmitting}>
            <span>{isSubmitting ? "Please wait..." : buttonText}</span>
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormWrap;
