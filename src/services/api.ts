import axios from "axios";


const api = axios.create({
    baseURL: 'https://3ab4-2804-431-c7db-a1c4-8f3-7352-c123-c639.ngrok.io'
});

export default api;