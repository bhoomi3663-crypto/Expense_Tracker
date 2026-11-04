import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
  const user1 = JSON.parse(localStorage.getItem("LoginUser")) || false;

  if (!user1) {
    return <Navigate to="/loginForm" />;
  } else {
    return children;
  }
}

export default ProtectedRouter;
