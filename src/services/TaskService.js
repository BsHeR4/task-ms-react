import apiClient from "../api/apiClient"

const TaskService = {
    fetchTasks: (params = {}) => {
        return apiClient.get("/tasks", { params })
    },
    createTask: (payload) => apiClient.post("/tasks", payload),
    deleteTask: (id) => apiClient.delete(`/tasks/${id}`),
};

export default TaskService
