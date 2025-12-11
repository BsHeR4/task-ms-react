import axios from "axios"

const BASE_URL = "http://127.0.0.1:8000/api/v1"

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

// =====================================================
// Request Interceptor
// =====================================================
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("task-ms-token")

        // we don't need `Authorization Header` for '/login' and '/register' endpoints
        const ignoreAuthRoutes = ["/login", "/register"]
        if (!ignoreAuthRoutes.includes(config.url)) {
            if (token) config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

// =====================================================
// Response Interceptor (Global Error Handling)
// =====================================================
apiClient.interceptors.response.use(
    (response) => response,

    (error) => {
        const status = error?.response?.status

        switch (status) {
            case 401:
                console.warn("Unauthorized → redirecting to login …")
                localStorage.removeItem("task-ms-token")
                window.location.href = "/signin"
                break

            case 422:
                // Validation errors
                return Promise.reject({
                    type: "VALIDATION",
                    errors: error.response.data.errors,
                })

            case 429:
                return Promise.reject({
                    type: "TOO_MANY_REQUESTS",
                    message: "Too many requests. Please wait a moment.",
                })

            case 500:
                return Promise.reject({
                    type: "SERVER_ERROR",
                    message: "Internal server error. Try again later.",
                })

            default:
                return Promise.reject({
                    type: "UNKNOWN",
                    message: "Something went wrong.",
                })
        }
    }
)

export default apiClient
