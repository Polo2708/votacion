import { LogOut } from "lucide-react"
import { useAuthController } from "../../../modules/auth/controller/auth-controller"

function FooterSidebarComponent() {
    const { logout } = useAuthController()
    return (
        <div className="h-full w-full flex flex-col">

            <div className="flex justify-end items-center" onClick={logout}>
                <LogOut />
            </div>
            <p>© 2025 Mi App</p>
        </div>
    )
}

export default FooterSidebarComponent
