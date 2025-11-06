import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuthStore } from "../../../store/auth/auth-store";

export const useAuthController = () => {
  const { login, register, loading, user } = useAuthStore();
  const [modo, setModo] = useState<"login" | "register">("login");

  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const campos = [
    { name: "email", type: "email", placeholder: "Correo electrónico" },
    { name: "password", type: "password", placeholder: "Contraseña" },
  ];

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      if (modo === "login") {
        await login(data);
        console.log(user);
      } else {
        await register(data);
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  const toggleModo = () =>
    setModo((prev) => (prev === "login" ? "register" : "login"));

  return {
    control,
    handleSubmit,
    onSubmit,
    campos,
    modo,
    toggleModo,
    loading,
  };
};
