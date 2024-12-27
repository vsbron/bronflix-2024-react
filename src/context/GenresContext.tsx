import { MOVIES_URL } from "@/lib/constants";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the genre type
interface Genre {
  id: number;
  name: string;
}

// Define the context type for better TypeScript inference
interface GenresContextType {
  genres: Genre[];
}

// Create the context with an initial value of `undefined` to handle cases where the provider is not used
const GenresContext = createContext<GenresContextType | undefined>(undefined);

// The provider component that supplies the genres data to children
export function GenresProvider({ children }: { children: ReactNode }) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await fetch(
          `${MOVIES_URL}/genre/movie/list?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&language=en-US`
        );
        const data = await response.json();
        setGenres(data.genres); // Assuming the API returns a "genres" array
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchGenres();
  }, []);

  return (
    <GenresContext.Provider value={{ genres }}>
      {children}
    </GenresContext.Provider>
  );
}

// Custom hook to use genres context in your components
export function useGenres() {
  const context = useContext(GenresContext);

  if (!context) {
    throw new Error("useGenres must be used within a GenresProvider");
  }

  return context;
}
