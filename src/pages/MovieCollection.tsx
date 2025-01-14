import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { ICollection } from "@/lib/typesAPI";
import { getMovieCollection } from "@/services/apiCollections";
import Heading from "@/components/Heading";

// Movie data loader
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
  console.log(collection);

  // Returned JSX
  return (
    <>
      <Heading>{collection.name}</Heading>
      {/* <CollectionDetails collection={collection} /> */}
    </>
  );
}

export default MovieCollection;
