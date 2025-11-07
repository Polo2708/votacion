import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

function MainDashboardComponent() {
    return (
        <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h1 className="text-3xl font-bold text-gray-800">Bienvenido de nuevo 👋</h1>
                <p className="text-gray-500">Aquí tienes un resumen de lo más reciente</p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-between gap-3 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-center items-center gap-3">
                        <div className="flex items-center justify-center bg-green-100 text-green-600 rounded-full p-2">
                            <Check size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Crear Nueva Votación</h2>
                            <p className="text-sm text-gray-500">
                                Inicia un nuevo proceso electoral
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-2.5 rounded-full">
                        <ArrowRight />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex justify-center items-center gap-2.5">
                        <div className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-2">
                            <Check size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-800">Ver Resultados</h2>
                            <p className="text-sm text-gray-500">
                                Consulta los datos más recientes de tus votaciones
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-2.5 rounded-full">
                        <ArrowRight />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-2">
                <div className="bg-white rounded-xl h-32 flex items-center justify-center text-gray-400 border border-dashed">
                    Próximamente...
                </div>
            </div>
        </div>
    );
}

export default MainDashboardComponent;
