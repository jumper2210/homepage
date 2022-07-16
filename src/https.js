import axios from 'axios'

const credentials = btoa(`${process.env.REACT_APP_CREDENTIALS}`)

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Basic ${credentials}`,
  },
})
