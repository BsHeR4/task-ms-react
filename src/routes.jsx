import { createBrowserRouter } from "react-router-dom"
import SignIn from "./pages/Auth/SignIn"
import Auth from "./pages/Auth/Auth"
import App from "./App"
import ListTasks from "./pages/tasks/listTasks"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Register from "./pages/Auth/Register"
import CreateTask from "./pages/tasks/CreateTask"
import EditTask from "./pages/tasks/EditTask"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: '/',
                element: <SignIn />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/tasks',
        element: <App />,
        children: [
            {
                path: '',
                element: <ListTasks />
            },
            {
                path: 'create-task',
                element: <CreateTask />
            },
            {
                path: 'edit-task/:id',
                element: <EditTask />
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

export default routes