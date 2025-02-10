import { ModalProvider } from "@/context/ModalContent";
import { BASE_GAP_CLASS } from "@/lib/constants";

import Button from "@/components/ui/Button";
import SignInForm from "@/components/Forms/SignInForm";
import SignUpForm from "@/components/Forms/SignUpForm";

function Authentication() {
  // Returned JSX
  return (
    <ModalProvider>
      <div className={`flex ${BASE_GAP_CLASS}`}>
        <ModalProvider.Trigger>
          <Button>
            <span>SIGN IN</span>
          </Button>
        </ModalProvider.Trigger>
        <ModalProvider.Content>
          <SignInForm />
        </ModalProvider.Content>
        <ModalProvider.Trigger>
          <Button>
            <span>SIGN UP</span>
          </Button>
        </ModalProvider.Trigger>
        <ModalProvider.Content>
          <SignUpForm />
        </ModalProvider.Content>
      </div>
    </ModalProvider>
  );
}

export default Authentication;
