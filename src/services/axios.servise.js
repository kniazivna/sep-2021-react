import axios from "axios";

import baseURL from "../configs/urls";

const axiosServise = axios.create({
    baseURL
});

export default axiosServise;