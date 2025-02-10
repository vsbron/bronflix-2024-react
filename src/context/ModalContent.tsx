import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  ModalContentProps,
  ModalContextProps,
  ModalProviderProps,
  ModalTriggerProps,
} from "@/lib/types";

// Creating the context
const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Parent component
export function ModalProvider({ children }: ModalProviderProps) {
  // Setting the pop up state and click handlers
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// Child components
function Trigger({ children }: ModalTriggerProps) {
  // Getting the opening modal function
  const { openModal } = useContext(ModalContext);

  // Return JSX
  return <div onClick={openModal}>{children}</div>;
}
function Content({ children }: ModalContentProps) {
  // Getting the modal state and close function
  const { isOpen, closeModal } = useContext(ModalContext);

  // Guard clause
  if (!isOpen) return null;

  // useEffect for Escape key press handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && isOpen && closeModal();
    };

    // Add the event listener
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  // Returned JSX
  return createPortal(
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 animate-fadeInForwards">
      <div className="relative z-30 bg-red-950 p-8 rounded-lg opacity-0 -t-[20rem] animate-showModalPopUp">
        <button
          onClick={closeModal}
          className="absolute -top-2 -right-12 text-white rounded-full text-[2.5rem] leading-1"
        >
          ✕
        </button>
        {children}
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
