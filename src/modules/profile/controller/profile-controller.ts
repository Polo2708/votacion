import { useState } from "react";

export const useProfileController = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    console.log("Ejecutado", isOpen);
    setIsOpen((prev) => !prev);
  };
  return {
    modalStatus,
    isOpen,
  };
};
