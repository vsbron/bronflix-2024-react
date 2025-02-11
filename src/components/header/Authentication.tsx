import { ModalProvider } from "@/context/ModalContext";
import { BASE_GAP_CLASS } from "@/lib/constants";

import Button from "@/components/ui/Button";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";

function Authentication() {
  // Returned JSX
  return (
    <ModalProvider>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        <ModalProvider.Trigger name="sign-in">
          <Button>
            <span>SIGN IN</span>
          </Button>
        </ModalProvider.Trigger>
        <ModalProvider.Content name="sign-in">
          <SignInForm />
        </ModalProvider.Content>
        <ModalProvider.Trigger name="sign-up">
          <Button>
            <span>SIGN UP</span>
          </Button>
        </ModalProvider.Trigger>
        <ModalProvider.Content name="sign-up">
          <SignUpForm />
        </ModalProvider.Content>
      </div>
    </ModalProvider>
  );
}

export default Authentication;
