import { useLocation, useNavigate } from "react-router-dom";
import { StoreTabs } from "../../../store/tabs/tabs-store";
import { useAuthStore } from "../../../store/auth/auth-store";
import { useEffect } from "react";

export const useSidebarController = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addTab, tabs } = StoreTabs();
  const { logout } = useAuthStore();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/votacion", label: "Votación" },
    { path: "/new-debate", label: "Crear Nuevo" },
    { path: "/settings", label: "Configuración" },
  ];

  const getLabelLocation = (path: string) => {
    if (path === "/") return "Inicio";
    console.log(path);
    const parts = path.split("").filter(Boolean);
    const last = parts[parts.length - 1];
    return last.charAt(0).toUpperCase() + last.slice(1).replace("-", " ");
  };

  useEffect(() => {
    const path = location.pathname;
    const exits = tabs.some((t) => t.path === path);
    if (exits) {
      addTab({
        path,
        label: getLabelLocation(path),
      });
    }
  }, [location.pathname, tabs, addTab]);

  const handleSelected = (item: any) => {
    if (tabs.length === 5) return alert("Maximo alcanzado");
    addTab(item);
    navigate(item.path);
  };

  const logoutAuth = () => {
    logout();
    navigate("/auth");
  };

  return {
    menuItems,
    handleSelected,
    logoutAuth,
  };
};
