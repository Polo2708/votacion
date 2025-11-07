import { LogOut } from "lucide-react"
import { useSidebarController } from "../controller/sidebar-controller"

function FooterSidebarComponent() {
    const { logoutAuth } = useSidebarController()
    return (
        <div className="h-full w-full flex flex-col">

            <div className="flex justify-end items-center" onClick={logoutAuth}>
                <LogOut />
            </div>
            <p>© 2025 Mi App</p>
        </div>
    )
}

export default FooterSidebarComponent
