import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-cc95e.firebaseio.com/'
});

export default instance;