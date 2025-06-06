
import { Navigate } from "react-router-dom";

const ProtectRouted = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectRouted;
