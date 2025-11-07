import { Outlet } from "react-router-dom";
import MainSidebarComponent from "../shared/sidebar/components/main-sidebar-component";
import NavbarComponent from "../shared/navbar/components/navbar-component";

export function MainLayout() {
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <MainSidebarComponent />

            <div className="flex flex-col flex-1 min-h-0">
                <NavbarComponent />

                <main className="flex-1 overflow-hidden p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
