import { useModalProfile } from "../../../store/moda-profile/modal-profile"

function ProfileComponent() {

    const { isOpen, closeProfile } = useModalProfile()
    return (
        <div >
            {isOpen && (
                <div className="h-screen bg-red-500">

                    <h1>Open Modal</h1>

                    <button onClick={closeProfile}>Cerrar</button>
                </div>
            )}
        </div>
    )
}

export default ProfileComponent
