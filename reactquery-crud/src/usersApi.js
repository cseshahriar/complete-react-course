import axios from  'axios';

const api = axios.create({baseURL: 'http://localhost:3001'});
const getUsers = () => api.get('/users').then(response => response.data);
export const getuser = (id) => api.get(`/users/${id}`).then((response) => response.data);
export const updateUser = ({id, ...updateUser}) => api.put(`/users/${id}`, updateUser).then((response) => response.data);
