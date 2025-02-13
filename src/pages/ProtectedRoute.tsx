import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "@/lib/typesRedux";

function ProtectedRoute() {
  // Checking whether user is authenticated
  const uid = useSelector((state: RootState) => state.user.uid);

  // Returned JSX
  return uid !== "" ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
