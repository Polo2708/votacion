import { X } from "lucide-react";
import { Link } from "react-router-dom";

function NavbarTabsComponent({ tabs, closeTab }: { tabs: any[], closeTab: (path: string) => void }) {
    return (
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
            {tabs.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                    <div
                        key={item.path}
                        className={`flex justify-between gap-4 items-center px-2 py-1 rounded-t-md border-b-2 transition-all duration-200
                            ${isActive
                                ? "bg-white border-b-blue-500 text-blue-600 shadow-sm"
                                : "bg-gray-100 border-b-transparent text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        <Link
                            to={item.path}
                            className="text-sm font-medium whitespace-nowrap truncate w-full"
                        >
                            {item.label}
                        </Link>

                        <button
                            onClick={() => closeTab(item.path)}
                            className="hover:text-red-500 transition"
                        >
                            <X size={14} />
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default NavbarTabsComponent
