import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <main className="h-screen">
            <Outlet />
        </main>
    );
}
