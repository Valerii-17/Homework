import axios from "axios";

const api = axios.create({
    baseURL: "https://6a3e28ce0443193a1a0b8662.mockapi.io",
});

export default api;