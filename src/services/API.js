import axios from 'axios'
import { API_URL_BASE } from '../contants/urlBaseApi'

const API = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default API
