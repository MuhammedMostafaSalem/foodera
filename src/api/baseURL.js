import axios from 'axios';

const baseURL = axios.create({baseURL: 'http://41.38.56.140/Store.Api'});

export default baseURL;