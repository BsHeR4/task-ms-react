import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Form from "../../components/Form/Form"
import TaskService from './../../services/TaskService'

const EditTask = () => {

    const params = useParams()
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: "",
        description: "",
        status: "",
    })

    const [loadingData, setLoadingData] = useState(true)
    const [updating, setUpdating] = useState()
    const [errors, setErrors] = useState({})

    useEffect(() => {
        loadTask()
    }, [])

    const loadTask = async () => {
        try {
            const res = await TaskService.fetchTask(params.id)
            setData({
                title: res.data.data.title,
                description: res.data.data.description,
                status: res.data.data.status,
            })
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingData(false)
        }
    }

    const dataHandle = async (data) => {
        setUpdating(true)

        try {
            await TaskService.updateTask(params.id, data);
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
            setUpdating(false)
        }
    };

    const inputs = [
        {
            id: 'title',
            label: 'Title',
            name: 'title',
            type: 'text',
            value: data.title
        },
        {
            id: 'description',
            label: 'Description',
            name: 'description',
            type: 'textarea',
            value: data.description
        },
    ]

    if (loadingData) return <div className="flex justify-center bg-gray-900 h-screen items-center bg-gray-900x">
        <p className='text-white text-center font-bold'>Loading ...</p>
    </div>

    return (
        <div className="white-spacing h-[calc(100vh-76.8px)]">
            <div className="flex justify-between pb-20 pt-10 text-white font-semibold">
                <div>
                    <Link to={'/tasks'}>Tasks</Link> / Edit Task
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
                submitTitle={updating ? "Updating ..." : "Update"}
                dataHandle={dataHandle}
            >
                <select
                    id="status"
                    className="appearance-none border w-full bg-gray-700 border-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-gray-400 text-white mt-2"
                >
                    <option selected={data.status == "done" ? true : false} value="done">Done</option>
                    <option selected={data.status == "pending" ? true : false} value="pending">Pending</option>
                    <option selected={data.status == "in_progress" ? true : false} value="in_progress">In progress</option>
                </select>
            </Form>
        </div>
    )
}

export default EditTask
