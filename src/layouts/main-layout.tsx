
import { Outlet } from "react-router-dom";
import MainSidebarComponent from "../shared/sidebar/components/main-sidebar-component";

export function MainLayout() {
    return (
        <div className="flex">
            <MainSidebarComponent />
            <div>
                <Outlet />
            </div>
        </div>
    );
}
