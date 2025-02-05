import { useEffect, useState } from "react";

import useVideo from "@/context/VideoContext";

import { MEDIA_URL } from "@/lib/constants";
import { IVideo } from "@/lib/typesAPI";

function useTrailer(id: string, type: "tv" | "movie" | "season") {
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

    let fetchURL;
    switch (type) {
      case "tv":
      case "movie":
        fetchURL = `${MEDIA_URL}${type}/${id}/videos?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`;
        break;
      case "season":
        fetchURL = `${MEDIA_URL}tv/${id}/season//videos?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`;
        break;
    }

    // Fetching data
    async function fetchVideo() {
      try {
        const response = await fetch(
          `${MEDIA_URL}${type}/${id}/videos?api_key=${
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
  }, [id, isOpen]);

  // Returning video
  return video;
}

export default useTrailer;
