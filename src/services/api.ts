import axios from "axios";


const api = axios.create({
    baseURL: 'https://e5cc-2804-431-c7da-e24-7c23-cca8-3add-1ea3.ngrok.io'
});

export default api;
