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
    <>
      <Nav />
      <div className="px-20">
        <Outlet />
      </div>
    </>
  )
}

export default App
