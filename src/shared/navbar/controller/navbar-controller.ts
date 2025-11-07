import { useLocation, useNavigate } from "react-router-dom";
import { StoreTabs } from "../../../store/tabs/tabs-store";

export const useNavbarController = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tabs, removeTab } = StoreTabs();

  const handleSeletedTab = (path: string) => {
    navigate(path);
  };

  const closeTab = (path: string) => {
    removeTab(path);
  };
  return {
    closeTab,
    handleSeletedTab,
    tabs,
    location 
  };
};
