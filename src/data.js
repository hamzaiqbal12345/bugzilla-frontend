import axios from 'axios'

export function fetchProjects() {
  return axios.get("http://localhost:3000/api/v1/projects")
  .then((response) => response.data)
  .catch((error) => error)
};

export function fetchProjectDetail(id) {
  return axios.get(`http://localhost:3000/api/v1/projects/${id}`)
  .then((response) => response.data)
  .catch((error) => error)
};
