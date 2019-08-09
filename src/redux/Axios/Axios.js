import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://shopnani-test-app.herokuapp.com',
    timeout: 50000
})

export default Axios;