import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem(TOKEN_KEY);

    return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;