import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ecommerce-node-api.herokuapp.com/',
});

export default instance;
