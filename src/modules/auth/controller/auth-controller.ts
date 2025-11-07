import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../store/auth/auth-store";
import { useNavigate } from "react-router-dom";

export const useAuthController = () => {
  const { login, register, loading, user, logout } = useAuthStore();
  const [modo, setModo] = useState<"login" | "register">("login");
  const navigate = useNavigate();

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
      } else {
        await register(data);
      }
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("Inicio de sesion exitoso", user);
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, [user]);

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
    logout,
  };
};
