import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-wbms.onrender.com' // localização backend
})
