import axios from "axios";
let service=axios.create({
    baseURL: "http://42.192.65.59:9000/",
    timeout: 3000
})
export default service