import axios from "axios";


const api = axios.create({
    baseURL: 'https://ecaf-2804-431-c7da-e24-cc58-2e3e-729e-f569.ngrok.io'
});

export default api;
