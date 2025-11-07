import { useSidebarController } from "../controller/sidebar-controller";
import FooterSidebarComponent from "./footer-sidebar-component";

function MainSidebarComponent() {
    const { menuItems, handleSelected } = useSidebarController()
    return (
        <aside className="flex flex-col justify-between bg-gray-900 text-gray-200 w-64 h-screen p-4">
            <div className="flex flex-col items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold tracking-wide">Mi App</h2>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-2 flex-1 w-full">
                <nav className="flex flex-col gap-3">
                    {menuItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleSelected(item)}
                            className="text-left hover:bg-gray-700 rounded px-3 py-2 transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </nav>

            {/* Footer / sección inferior */}
            <div className="border-t border-gray-700 pt-3 text-sm text-gray-400">
                <FooterSidebarComponent />
            </div>
        </aside>
    );
}

export default MainSidebarComponent;
