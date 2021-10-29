import axios from "axios";


const api = axios.create({
    baseURL: 'http://k3-xjx.fcursino.onecar-mobile.exp.direct:3333'
});

export default api;