import api from "./api";

export const getUsers = async () => {
  const response = await api.get("/expense");
  return response.data;
};
// Get user by ID
export const getUserById = async (id) => {
  const response = await api.get(`/expense/${id}`);
  return response.data;
};

// Create user
export const createUser = async (expenseData) => {
  const response = await api.post("/expense", expenseData);
  return response.data;
};

// Update user
export const updateUser = async (id, expenseData) => {
  const response = await api.put(`/expense/${id}`, expenseData);
  return response.data;
};

// Delete user
export const deleteUser = async (id) => {
  const response = await api.delete(`/expense/${id}`);
  return response.data;
};
