import axios from "axios";

const api = axios.create({
  baseURL: "http://35.74.96.103:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

const userApi = {
  getAllUsers: () => api.get("/account/users"),
  logIn: (user) => api.post("/account/login", user),
  signUp: (user) => api.post("/account/signup", user),
};

const todoApi = {
  addTodo: (todo) => api.post("/todo/register", todo),
  getTodo: (username) => api.get(`/todo/list?username=${username}`),
  deleteTodo: (todoId) => api.delete(`todo/delete/${todoId}`),
};

export { userApi, todoApi };
