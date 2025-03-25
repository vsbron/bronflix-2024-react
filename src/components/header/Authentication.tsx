import { ModalProvider } from "@/context/ModalContext";
import { BASE_GAP_CLASS } from "@/lib/constants";

import Button from "@/components/ui/Button";
import SignInForm from "@/components/Forms/SignInForm";
import SignUpForm from "@/components/Forms/SignUpForm";
import { AuthenticationProps } from "@/lib/types";

function Authentication({ col }: AuthenticationProps) {
  // Returned JSX
  return (
    <ModalProvider>
      <div className={`flex ${col ? "flex-col" : ""} ${BASE_GAP_CLASS}`}>
        <ModalProvider.Trigger name="sign-in">
          <Button label="Sign into account">
            <span>SIGN IN</span>
          </Button>
        </ModalProvider.Trigger>
        <ModalProvider.Content name="sign-in">
          <SignInForm />
        </ModalProvider.Content>
        <ModalProvider.Trigger name="sign-up">
          <Button label="Sign up for BroNflix">
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
