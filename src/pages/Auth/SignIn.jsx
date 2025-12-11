import { useState } from 'react'
import Form from '../../components/Form/Form'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import inputs from '../../consts/SignInInputs'

const SignIn = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const [errors, setErrors] = useState({})

    const handleLogin = async (data) => {
        setLoading(true)
        setErrors({})

        try {
            const res = await AuthService.login(data)
            console.log(res.data)
            localStorage.setItem("task-ms-token", res.data.token)
            navigate("/tasks")

        } catch (err) {
            console.log(err)
            if (err.type === "VALIDATION") {
                setErrors(err.errors)
            }
            else if (err.type === "TOO_MANY_REQUESTS") {
                alert(err.message)
            }
            else {
                alert(err.message)
            }

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <p className='text-white text-center font-bold'>Loading ...</p>
                    </div>
                ) : (

                    <>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h1 className="mx-auto h-10 w-auto text-center text-white font-extrabold text-4xl">Task-ms</h1>
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <Form inputs={inputs} submitTitle={"Sign in"} dataHandle={handleLogin} />
                            <p className="mt-10 text-center text-sm/6 text-gray-400">
                                Don't have an account?{' '}
                                <Link to={'/register'} className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Register
                                </Link>
                            </p>
                            {errors && Object.keys(errors).length > 0 && (
                                <ul className="mt-4 text-red-400 text-center">
                                    {Object.keys(errors).map((key, i) => (
                                        <li key={i}>
                                            {errors[key][0]}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )
            }
        </>

    )
}

export default SignIn
