import { createBrowserRouter } from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn"
import Auth from "./pages/Auth/Auth"
import App from "./App"
import ListTasks from "./pages/listTasks/listTasks"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Register from "./pages/Register/Register"

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
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
])

export default routes