import { createContext, ReactNode, useContext, useState } from "react";

import { VideoContextProps } from "@/lib/types";

const VideoContext = createContext<VideoContextProps>({
  isOpen: false,
  openVideo: () => {},
  closeVideo: () => {},
});

// Parent component
function Video({ children }: { children: ReactNode }) {
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
function Trigger({ children }: { children: ReactNode }) {
  // Getting the opening video function
  const { openVideo } = useContext(VideoContext);

  // Return JSX
  return <div onClick={openVideo}>{children}</div>;
}
function Content({ video }: { video: string }) {
  // Getting the video state and close function
  const { isOpen, closeVideo } = useContext(VideoContext);

  // Guard clause
  if (!isOpen) return null;

  // Returned JSX
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70">
      <div className="relative bg-red-950 p-8 rounded-lg">
        <button
          onClick={closeVideo}
          className="absolute -top-2 -right-12 bg-white-200 rounded-full text-[2rem] leading-1"
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
          <div>Sorry, no trailer available</div>
        )}
      </div>
    </div>
  );
}

// Tieing everything up
Video.Trigger = Trigger;
Video.Content = Content;

export default Video;
