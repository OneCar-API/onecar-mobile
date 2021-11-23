import axios from "axios";


const api = axios.create({
    baseURL: 'https://5d51-2804-431-c7db-ae42-5897-ec93-dbc7-7ba1.ngrok.io'
});

export default api;
