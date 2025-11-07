import { useNavigate } from "react-router-dom";
import { StoreTabs } from "../../../store/tabs/tabs-store";

export const useSidebarController = () => {
  const navigate = useNavigate();
  const { addTab, tabs } = StoreTabs();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/votacion", label: "Votación" },
    { path: "/settings", label: "Configuración" },
  ];

  const handleSelected = (item: any) => {
    if (tabs.length === 5) return alert("Maximo alcanzado");
    addTab(item);
    navigate(item.path);
  };
  return {
    menuItems,
    handleSelected,
  };
};
