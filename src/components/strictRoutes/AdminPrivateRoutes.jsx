import { Navigate } from "react-router-dom";

const AdminPrivateRoutes = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("users"));

    if (user?.role === "admin") {
        return children;
    }
    else {
        return <Navigate to="/login" />
    }
}

export default AdminPrivateRoutes
