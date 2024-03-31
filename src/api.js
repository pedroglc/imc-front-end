import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:5000',
  baseURL: 'https://api-imc-mongodb-node.vercel.app',
});

export default api;
