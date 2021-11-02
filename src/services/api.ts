import axios from "axios";


const api = axios.create({
    baseURL: 'https://ee86-2804-431-c7da-fa3f-b4c9-b06d-3db6-10ab.ngrok.io'
});

export default api;