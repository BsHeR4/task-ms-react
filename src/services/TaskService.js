import apiClient from "../api/apiClient"

const TaskService = {
    fetchTasks: (params = {}) => {
        return apiClient.get("/tasks", { params })
    },
    fetchTask: (id) => apiClient.get(`/tasks/${id}`),
    createTask: (payload) => apiClient.post("/tasks", payload),
    updateTask: (id, payload) => apiClient.put(`/tasks/${id}`, payload),
    deleteTask: (id) => apiClient.delete(`/tasks/${id}`),
};

export default TaskService
