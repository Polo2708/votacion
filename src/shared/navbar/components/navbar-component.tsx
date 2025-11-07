import { Avatar } from "@mui/material";
import { useNavbarController } from "../controller/navbar-controller";
import NavbarTabsComponent from "./navbar-tabs";

function NavbarComponent() {

    const { tabs, closeTab } = useNavbarController()
    return (
        <nav className="flex w-full items-center justify-between bg-white border-b border-gray-200 px-6 py-2 shadow-sm">
            <NavbarTabsComponent tabs={tabs} closeTab={closeTab} />

            <div className="flex items-center gap-3">
                <span className="hidden md:block text-sm text-gray-700">
                    Hola, Polo
                </span>
                <Avatar className="cursor-pointer hover:opacity-80 transition" />
            </div>
        </nav>
    );
}

export default NavbarComponent;
