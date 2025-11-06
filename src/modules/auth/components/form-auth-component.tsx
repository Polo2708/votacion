import { Controller } from "react-hook-form"
import { useAuthController } from "../controller/auth-controller"
import { TextField, Button, CircularProgress } from "@mui/material"

function AuthComponent() {
    const { control, handleSubmit, onSubmit, campos, modo, toggleModo, loading } = useAuthController()

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="p-8 border border-gray-200 shadow-sm rounded-2xl w-80">
                <h2 className="text-center text-2xl mb-4 font-semibold">
                    {modo === "login" ? "Iniciar sesión" : "Crear cuenta"}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    {campos.map((item, index) => (
                        <Controller
                            key={index}
                            name={item.name as "email" | "password"}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type={item.type}
                                    label={item.placeholder}
                                    variant="standard"
                                />
                            )}
                        />
                    ))}

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="mt-4"
                    >
                        {loading && (<CircularProgress />)}
                        {modo === "login" ? "Entrar" : "Registrarse"}
                    </Button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">
                    {modo === "login" ? (
                        <>
                            ¿No tienes cuenta?{" "}
                            <button
                                onClick={toggleModo}
                                className="text-blue-500 hover:underline"
                            >
                                Crear una
                            </button>
                        </>
                    ) : (
                        <>
                            ¿Ya tienes cuenta?{" "}
                            <button
                                onClick={toggleModo}
                                className="text-blue-500 hover:underline"
                            >
                                Iniciar sesión
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    )
}

export default AuthComponent
