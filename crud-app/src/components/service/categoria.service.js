import { api } from "../api/index.js"

export const getAll = async () => {
  const response = await api.get('/categorias')
  return response;
}