import axios from "axios";
const BASE_URL = "http://localhost:3003/api";
const  instance=axios.create({
    baseURL:BASE_URL,
});
export default instance;