import AuthComponent from "../components/form-auth-component"
import InfoAuthComponent from "../components/info-auth-component"

function AuthView() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2"><AuthComponent /></div>
            <div className="w-full"><InfoAuthComponent /></div>
        </div>
    )
}

export default AuthView
