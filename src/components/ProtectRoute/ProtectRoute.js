import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export function ProtectRoute({ children }) {
  const { user } = useAuthContext();

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
