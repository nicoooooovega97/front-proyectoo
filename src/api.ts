import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export async function fetchItems() {
  const response = await api.get('/items');
  return response.data;
}

export async function createItem(item: any) {
  const response = await api.post('/items', item);
  return response.data;
}
