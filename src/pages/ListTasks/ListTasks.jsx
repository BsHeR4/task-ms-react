import { useEffect, useState } from "react"
import TaskService from "../../services/TaskService"
import TaskItem from "../../components/TaskItem/TaskItem"
import Input from "../../components/Input/Input"
import Pagination from "../../components/Pagination/Pagination"
import { Link } from "react-router-dom"

const ListTasks = () => {

  const [tasks, setTasks] = useState([])

  const [filters, setFilters] = useState({
    search: "",
    status: "",
  })

  const [page, setPage] = useState(1)

  const [meta, setMeta] = useState({})

  const [loading, setLoading] = useState()

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadTasks();
    }, 400)

    return () => clearTimeout(timeout)

  }, [filters, page])

  const loadTasks = async () => {
    try {
      setLoading(true)

      const res = await TaskService.fetchTasks({
        ...filters,
        page
      })

      setTasks(res.data.data)
      setMeta(res.data.meta)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter(task => task.id !== id))
  }

  return (

    <div className="white-spacing h-[calc(100vh-76.8px)]">
      <div className="flex justify-between items-center">
        {/* Filters */}
        <div className="pt-4 flex gap-9 items-center">
          <Input
            type="text"
            placeholder="Search..."
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />
          <select
            id="status"
            class="appearance-none border bg-gray-700 border-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 placeholder-gray-400 text-white mt-2"
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value={""} selected>All</option>
            <option value="done">Done</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In progress</option>
          </select>
        </div>

        <Link
          to={'create-task'}
          className="self-end rounded-md bg-green-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Create
        </Link>
      </div>

      {/* Tasks */}
      {
        loading ? (
          <div className="flex justify-center bg-gray-900 h-screen items-center bg-gray-900x">
            <p className='text-white text-center font-bold'>Loading ...</p>
          </div>
        ) : (
          <div className="bg-gray-900">
            <div className="divide-y divide-white/5">
              {tasks.map((task) => (
                <TaskItem
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  onDelete={handleDeleteTask}
                />
              ))}
            </div>

            {/* Pagination */}
            {meta.last_page > 1 && (
              <Pagination
                currentPage={meta.current_page}
                lastPage={meta.last_page}
                onPageChange={(p) => setPage(p)}
                className="mt-6"
              />
            )}
          </div>
        )
      }
    </div >
  )
}

export default ListTasks