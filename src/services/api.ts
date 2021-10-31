import axios from "axios";


const api = axios.create({
    baseURL: 'https://0603-2804-431-c7da-fa3f-b480-f9bb-c71e-7107.ngrok.io'
});

export default api;