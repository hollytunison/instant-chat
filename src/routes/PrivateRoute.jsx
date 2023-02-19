import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  // later will be current user of logged in user
  const currentUser = false;

  if(!currentUser) {
    return <Navigate to="/" replace={true} />
  }
  return children;
}