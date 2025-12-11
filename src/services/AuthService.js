import apiClient from "../api/apiClient"

const AuthService = {
    login: (payload) => apiClient.post("/login", payload),
    register: (payload) => apiClient.post("/register", payload),
    logout: () => {
        apiClient.post("/logout")
        localStorage.removeItem("task-ms-token")
    },
}

export default AuthService
