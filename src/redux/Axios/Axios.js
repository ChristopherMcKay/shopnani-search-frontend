import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://webapi.shopnani.com/',
    timeout: 50000
})

export default Axios;