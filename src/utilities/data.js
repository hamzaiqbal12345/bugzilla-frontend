import axios from 'axios'

export function fetchData (url) {
  return axios.get(`${process.env.REACT_APP_BASE_URL}${url}`)
    .then((response) => response.data)
    .catch((error) => error)
};
