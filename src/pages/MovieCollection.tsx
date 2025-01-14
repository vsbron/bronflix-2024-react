import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { ICollection, IMovie } from "@/lib/typesAPI";
import { getMovieCollection } from "@/services/apiCollections";

import Heading from "@/components/Heading";
import CollectionDetails from "@/features/collectionDetails/CollectionDetails";
import CollectionMovies from "@/features/collectionDetails/CollectionMovies";

// Movie collection data loader
export const movieCollectionLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ICollection> => {
  // Getting the collection using API function
  const collection = await getMovieCollection(params.collectionId!);
  // Return collection
  return collection;
};

// The component
function MovieCollection() {
  // Getting the collection data from the loader
  const collection = useLoaderData() as ICollection;

  // Returned JSX
  return (
    <>
      <CollectionDetails collection={collection} />
      <CollectionMovies movies={collection.parts as IMovie[]} />
    </>
  );
}

export default MovieCollection;
