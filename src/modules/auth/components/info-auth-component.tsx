function InfoAuthComponent() {
    return (
        <div className="h-full flex flex-col items-center justify-center bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">🗳️ Bienvenido a VotaApp</h1>

                <p className="text-sm text-gray-100 mb-6">
                    Participa en decisiones importantes de forma segura y transparente.
                    Crea votaciones, comparte con otros y observa los resultados en tiempo real.
                </p>

                <ul className="text-left text-gray-100 mb-8 space-y-2">
                    <li>✅ Autenticación segura con Supabase</li>
                    <li>✅ Resultados instantáneos</li>
                    <li>✅ Diseño simple y rápido</li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
                        Iniciar sesión
                    </button>
                    <button className="bg-purple-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-800 transition">
                        Registrarse
                    </button>
                </div>
            </div>

            <footer className="mt-8 text-xs text-gray-200">
                © {new Date().getFullYear()} VotaApp. Todos los derechos reservados.
            </footer>
        </div>
    )
}

export default InfoAuthComponent
