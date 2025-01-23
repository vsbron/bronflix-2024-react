import { useEffect, useState } from "react";

import useVideo from "@/context/VideoContext";

import { MEDIA_URL } from "@/lib/constants";
import { IBase, IVideo } from "@/lib/typesAPI";

function useTrailer(media: IBase, type: string) {
  // Setting the state for the fetched video
  const [video, setVideo] = useState<string>();
  const { isOpen } = useVideo();

  // Use effect that fetches trailer
  useEffect(() => {
    // Prevent fetch if modal is open (on index)
    if (isOpen) return;

    // Creating controller for cleanup function
    const controller = new AbortController();
    const { signal } = controller;

    // Fetching data
    async function fetchVideo() {
      try {
        const response = await fetch(
          `${MEDIA_URL}/${type}/${media.id}/videos?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`,
          { signal }
        );
        const data = await response.json();

        // Find the YouTube trailer in the data
        const trailer = data.results.find(
          (video: IVideo) =>
            video.type === "Trailer" && video.site === "YouTube"
        );

        // Updating the state of video
        setVideo(trailer ? `https://www.youtube.com/embed/${trailer.key}` : "");
      } catch (error) {
        setVideo("");
        console.error("Error fetching trailer:", error);
      }
    }

    // Call the function
    fetchVideo();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [media, isOpen]);

  // Returning video
  return video;
}

export default useTrailer;
