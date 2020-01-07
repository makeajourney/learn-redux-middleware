import axios from 'axios';

export function getPost(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export function getUsers(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/users`);
}
