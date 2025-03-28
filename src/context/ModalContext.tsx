import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useMobileNav } from "@/context/MobileNavContext";
import {
  ModalContentProps,
  ModalContextProps,
  ModalProviderProps,
  ModalTriggerProps,
} from "@/lib/types";

// Creating the context
const ModalContext = createContext<ModalContextProps>({
  activeModal: "",
  openModal: () => {},
  closeModal: () => {},
});

// Parent component
export function ModalProvider({ children }: ModalProviderProps) {
  // Getting the close mobile nav function from custom hook
  const { closeMenu } = useMobileNav();

  // Setting the pop up state and click handlers
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const openModal = (name: string) => {
    closeMenu();
    setActiveModal(name);
  };
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// Child components
function Trigger({ children, name }: ModalTriggerProps) {
  // Getting the opening modal function
  const { openModal } = useContext(ModalContext);

  // Return JSX
  return <div onClick={() => openModal(name)}>{children}</div>;
}
function Content({ children, name, alternative = false }: ModalContentProps) {
  // Getting the modal state and close function
  const { activeModal, closeModal } = useContext(ModalContext);

  // useEffect for Escape key press handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && closeModal();
    };

    // Add the event listener
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [closeModal]);

  // Guard clause
  if (activeModal !== name) return null; // Only show modal if it matches activeModal

  // Returned JSX
  return createPortal(
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 animate-fadeInForwards">
      <div className="flex items-start gap-4 opacity-0 relative -t-[20rem] animate-showModalPopUp ">
        <div
          className={`z-30 p-8 text-stone-50 rounded-lg md:min-w-[35rem] max-md:min-w-1 max-md:w-[32rem] ${
            alternative
              ? "bg-red-950 max-md:p-2 max-md:w-[40rem] max-sm:w-[33rem]"
              : "bg-stone-900"
          } max-h-[95vh] overflow-y-scroll`}
        >
          {children}
        </div>

        <button
          onClick={closeModal}
          className={`text-white rounded-full text-[2.5rem] leading-1 z-40 relative max-md:absolute max-md:top-1 max-md:right-4 ${
            alternative ? "max-md:-top-14 max-md:right-0" : ""
          }`}
          aria-label="Modal window"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}

// Tieing everything up
ModalProvider.Trigger = Trigger;
ModalProvider.Content = Content;

// Custom hook
const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

export default useModal;
