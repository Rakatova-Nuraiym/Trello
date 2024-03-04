import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Clild {
  children: ReactNode;
}
const ProviderPage = ({ children }: Clild) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuth = localStorage.getItem("isAuth");
  const isAuthBoolean = !!isAuth;

  useEffect(() => {
    if (isAuthBoolean && pathname === "/login") {
      navigate("/");
    } else if (!isAuthBoolean && pathname === "/") {
      navigate("login");
    } else if (isAuthBoolean && pathname === "/registration") {
      navigate("/");
    }
  }, [pathname]);

  return children;
};

export default ProviderPage;
