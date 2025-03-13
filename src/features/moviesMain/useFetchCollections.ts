import { COLLECTION_IDS, MEDIA_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

const useFetchCollections = () => {
  const [collections, setCollections] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchCollections = async () => {
      try {
        setIsLoading(true);
        const responses = await Promise.all(
          COLLECTION_IDS.map((id) =>
            fetch(
              `${MEDIA_URL}collection/${id}?api_key=${
                import.meta.env.VITE_TMDB_API_KEY
              }`,
              {
                signal,
              }
            ).then((res) =>
              res.ok
                ? res.json()
                : Promise.reject(`Failed to fetch collection ${id}`)
            )
          )
        );
        setCollections(responses);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();

    return () => controller.abort();
  }, []);

  return { collections, isLoading, error };
};

export default useFetchCollections;
