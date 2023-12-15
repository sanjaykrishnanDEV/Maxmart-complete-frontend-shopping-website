import useAuth from "../components/customhooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
