import axios from "axios";


const api = axios.create({
    baseURL: 'https://c5b4-2804-431-c7db-ae42-3163-79a3-94b1-ddc.ngrok.io'
});

export default api;
