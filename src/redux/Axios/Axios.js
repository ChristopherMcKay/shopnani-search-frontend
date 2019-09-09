import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://shopnani-search.herokuapp.com',
    timeout: 50000
})

export default Axios;