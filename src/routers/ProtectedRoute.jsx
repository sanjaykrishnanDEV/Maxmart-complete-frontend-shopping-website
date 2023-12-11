// import  useAuth  from "../components/customhooks/useAuth";
// import { Navigate, Outlet } from "react-router-dom";
// const ProtectedRoute = ({ children }) => {
//   console.log({children})
//   const  {currentUser}  = useAuth();
//   return currentUser ? children : <Navigate to="/login"></Navigate>;
// };
// export default ProtectedRoute;
import useAuth from "../components/customhooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

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
