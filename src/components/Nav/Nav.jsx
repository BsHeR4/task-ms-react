import { useNavigate } from "react-router-dom"
import AuthService from "../../services/AuthService"

const Nav = () => {

    const navigate = useNavigate()

    const handleLogout = async () => {
        AuthService.logout()
        navigate('/')
    }

    return (
        <nav className="px-20 py-5 flex justify-between items-center text-white bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <h1 className="text-2xl font-bold">Task-ms</h1>
            <button
                className="flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={() => handleLogout()}
            >
                Logout
            </button>
        </nav>
    )
}

export default Nav
