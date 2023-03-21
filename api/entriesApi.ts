import axios from 'axios'; 

export const entriesApi = axios.create({baseURL: 'http://localhost:3000/api/entries'})

