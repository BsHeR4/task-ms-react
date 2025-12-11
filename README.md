# Task Management System (Frontend)

## Overview
This project is a **Task Management System Frontend** built using **React**, following modern architectural patterns and production-ready practices. The application interacts with a Laravel API and provides a clean, scalable, and maintainable codebase.

The system supports:
- Authentication (Login + Register + Logout)
- Task CRUD operations
- Real-time filtering (search + status)
- Pagination based on backend metadata
- Centralized service layer for API communication

---

## Features

### Authentication
The system includes a full authentication flow that integrates with the backend API:

- Login

    Users can log into their accounts through /auth/login

    Token is stored and used for all authenticated requests

    Invalid credentials and validation errors are handled gracefully

- Register

    Users can create an account through /auth/register

    Automatic login after registration

- Protected Routes

    If the token is missing or expired → users are redirected to /login

- Token Handling

    Token is stored in localStorage

    Axios interceptors attach the token automatically to requests

- Auto Logout Handling

    If API returns 401 Unauthorized, Axios automatically:

    1- Clears the token

    2- Redirects the user to `/` (signup)

###  Task Management
- Create, update, delete tasks
- List tasks with filters

###  Filtering & Pagination
- Debounced search
- Status filtering
- Pagination using meta information provided by backend

###  Clean Architecture
- Organized file structure
- Reusable UI components
- Service layer for API calls
- Isolated business logic

---

## Tech Stack
### Frontend
- **React** (Functional Components + Hooks)
- **React Router DOM**
- **TailwindCSS**
- **Axios** (via apiClient service)

### Backend
- Laravel (REST API)

---

## Installation & Setup
### 1. Clone the Project
```
git clone https://github.com/BsHeR4/task-ms-react.git
cd task-ms-react
```

### 2. Install Dependencies
```
npm install
```

### 3. Run the Project
```
npm run dev
```

---

## API Integration
All API requests are done through the service layer.

### Example: Fetch Tasks
```javascript
TaskService.fetchTasks({ search, status, page });
```
The service automatically builds the query string and handles errors.

---

## Pagination
Pagination uses metadata returned from backend:
```
meta: {
  current_page,
  last_page,
  total
}
```
The UI receives meta and updates the pagination component accordingly.

---