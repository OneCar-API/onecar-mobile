import axios from "axios";


const api = axios.create({
    baseURL: 'https://6d2f-2804-431-c7db-a1c4-79c8-ab63-5d05-7a20.ngrok.io'
});

export default api;
