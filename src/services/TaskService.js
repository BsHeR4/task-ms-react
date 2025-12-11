import apiClient from "../api/apiClient"

const TaskService = {
    fetchTasks: (params = {}) => {
        return apiClient.get("/tasks", { params })
    },
    deleteTask: (id) => apiClient.delete(`/tasks/${id}`),
};

export default TaskService
