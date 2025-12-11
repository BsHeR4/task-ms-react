import { createBrowserRouter } from "react-router-dom"
import SignIn from "./pages/SignIn/SignIn"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: '/',
                element: <SignIn />
            }
        ]
    }
])

export default routes