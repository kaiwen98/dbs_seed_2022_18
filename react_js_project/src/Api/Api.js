import axios from "axios";

export default axios.create({
    baseURL : 'http://172.20.10.3:5000'
})