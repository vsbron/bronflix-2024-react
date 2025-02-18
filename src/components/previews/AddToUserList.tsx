import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";

function AddToUserList() {
  // Returned JSX
  return (
    <div className="absolute top-3 right-4 w-10 flex flex-col gap-2">
      <span className="text-red-500">
        <HeartIcon />
      </span>
      <span className="text-yellow-500">
        <EyeIcon />
      </span>
    </div>
  );
}

export default AddToUserList;
