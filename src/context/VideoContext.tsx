import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  VideoContentProps,
  VideoContextProps,
  VideoProviderProps,
  VideoTriggerProps,
} from "@/lib/types";

// Creating the context
const VideoContext = createContext<VideoContextProps>({
  isOpen: false,
  openVideo: () => {},
  closeVideo: () => {},
});

// Parent component
export function VideoProvider({ children }: VideoProviderProps) {
  // Setting the pop up state and click handlers
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);
  return (
    <VideoContext.Provider value={{ isOpen, openVideo, closeVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

// Child components
function Trigger({ children }: VideoTriggerProps) {
  // Getting the opening video function
  const { openVideo } = useContext(VideoContext);

  // Return JSX
  return <div onClick={openVideo}>{children}</div>;
}
function Content({ video }: VideoContentProps) {
  // Getting the video state and close function
  const { isOpen, closeVideo } = useContext(VideoContext);

  // Guard clause
  if (!isOpen) return null;

  // useEffect for Escape key press handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.key === "Escape" && isOpen && closeVideo();
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
      <div className="relative z-30 bg-red-950 p-8 rounded-lg opacity-0 -t-[20rem] animate-showVideoPopUp">
        <button
          onClick={closeVideo}
          className="absolute -top-2 -right-12 text-white rounded-full text-[2.5rem] leading-1"
        >
          ✕
        </button>
        {video !== "" ? (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="800"
              height="450"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        ) : (
          <div className="text-stone-50 px-20 py-8 flex justify-center items-center text-center text-3xl leading-snug">
            Sorry, no trailer available
            <br />
            Please try again later...
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

// Tieing everything up
VideoProvider.Trigger = Trigger;
VideoProvider.Content = Content;

// Custom hook
const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) throw new Error("useVideo must be used within VideoProvider");
  return context;
};

export default useVideo;
