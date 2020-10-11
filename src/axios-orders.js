import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-5a57f.firebaseio.com/'
});

export default instance;