import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BackspaceNavigation = () => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate

  useEffect(() => {
    // Event handler function to listen for key press events
    const handleKeyPress = (event: KeyboardEvent) => {
      // Safely cast event.target
      const target = event.target as HTMLElement | null;

      // Check if the pressed key is 'Backspace' and not within a contenteditable element ot form fields
      if (
        event.key === "Backspace" &&
        target &&
        !target.isContentEditable &&
        target.tagName !== "INPUT" &&
        target.tagName !== "TEXTAREA"
      ) {
        navigate(-1); // Navigate back using navigate(-1), equivalent to history.goBack()
      }
    };

    // Add event listener for the 'keydown' event on the window object
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]); // Include navigate in the dependencies array to ensure useEffect runs when navigate changes

  return null;
};

export default BackspaceNavigation;
