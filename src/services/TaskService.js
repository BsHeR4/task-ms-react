import apiClient from "../api/apiClient"

const TaskService = {
    fetchTasks: (params  = {}) => {
        return apiClient.get("/tasks", { params })
    },
};

export default TaskService
