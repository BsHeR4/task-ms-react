import { Link, useNavigate } from "react-router-dom"
import Form from "../../components/Form/Form"
import { useState } from "react"
import TaskService from "../../services/TaskService"
import inputs from "../../consts/TaskCreationInputs"

const CreateTask = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const [errors, setErrors] = useState({})

    const dataHandle = async (data) => {
        setLoading(true)
        setErrors({})

        try {
            const res = await TaskService.createTask(data)
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
        <div className="white-spacing h-[calc(100vh-76.8px)]">
            <div className="flex justify-between pb-20 pt-10 text-white font-semibold">
                <div>
                    <Link to={'/tasks'}>Tasks</Link> / Create Task
                </div>
                <Link
                    to={'/tasks'}
                    className="flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Back
                </Link>
            </div>
            {errors && Object.keys(errors).length > 0 && (
                <ul className="mt-4 text-red-400 mb-3">
                    {Object.keys(errors).map((key, i) => (
                        <li key={i}>
                            {errors[key][0]}
                        </li>
                    ))}
                </ul>
            )}
            <Form
                inputs={inputs}
                submitTitle={loading ? "Creating ..." : "Create"}
                dataHandle={dataHandle}
            >
            </Form>
        </div>
    )
}

export default CreateTask
