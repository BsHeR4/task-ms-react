import { Link } from "react-router-dom"
import TaskService from "../../services/TaskService"

const TaskItem = ({ id, title, description, status, onDelete }) => {

    const handleDelete = async () => {
        await TaskService.deleteTask(id)
        onDelete(id)
    }

    return (
        <div className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-white">{title}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-400 text-wrap">{description}</p>
                    <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                        {status}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Link
                    to={`edit-task/${id}`}
                    className="flex justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Edit
                </Link>
                <button
                    onClick={handleDelete}
                    className="flex justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TaskItem
