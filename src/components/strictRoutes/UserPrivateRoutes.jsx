import { Navigate } from "react-router-dom";

const UserPrivateRoutes = ({children}) => {
  const user = JSON.parse(localStorage.getItem("users"));

  if (user?.role === "user") {
    return children;
  }
  else {
    return <Navigate to="/login" />
  }
}

export default UserPrivateRoutes
