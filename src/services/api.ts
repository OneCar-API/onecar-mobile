import axios from "axios";


const api = axios.create({
    baseURL: 'https://6526-2804-431-c7da-e24-d993-d7c8-f9ea-7b3e.ngrok.io'
});

export default api;
