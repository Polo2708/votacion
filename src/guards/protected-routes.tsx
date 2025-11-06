import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouterGuard() {
    const token = Cookies.get("sb_token");

    if (!token) {
        return <Navigate to="/auth" replace />;
    }

    return <Outlet />;
}

export default ProtectedRouterGuard;
