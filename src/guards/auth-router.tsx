import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"

function AuthRouterGuard() {
    const token = Cookies.get("sb_token")

    if (token) {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default AuthRouterGuard
