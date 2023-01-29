import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mocki.io/',
  timeout: 90 * 1000,
})

export default instance
