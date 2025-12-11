import { Outlet, useNavigate } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("task-ms-token"))
      navigate("/")
  }, [])

  return (
    <div className="bg-gray-900">
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
