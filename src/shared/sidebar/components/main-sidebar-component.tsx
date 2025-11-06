import { Link } from "react-router-dom"

function MainSidebarComponent() {
    return (
        <div className="">
            <aside className="w-64 bg-gray-900 text-white h-screen p-4 fixed left-0 top-0">
                <h2 className="text-xl font-bold mb-6">Mi App</h2>
                <nav className="flex flex-col gap-3">
                    <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
                    <Link to="/profile" className="hover:bg-gray-700 p-2 rounded">Perfil</Link>
                    <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Configuración</Link>
                </nav>
            </aside>
        </div>
    )
}

export default MainSidebarComponent
