import axios from 'axios';

import baseURL from "../constats/urls";

const axiosService = axios.create({baseURL});

export default axiosService;