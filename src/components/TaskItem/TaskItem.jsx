import { Link } from "react-router-dom"
import TaskService from "../../services/TaskService"

const TaskItem = ({ id, title, description, onDelete }) => {

    const handleDelete = async () => {
        await TaskService.deleteTask(id)
        onDelete(id)
    }

    return (
        <div key={id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-white">{title}</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-400 text-wrap">{description}</p>
                </div>
            </div>
            <div className="flex items-end gap-2">
                <Link
                    className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
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
