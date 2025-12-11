import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("task-ms-token"))
            navigate("/tasks")
    }, [])

    return (
        <div className='h-screen bg-gray-900'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <Outlet />
            </div>
        </div >
    )
}

export default Auth
