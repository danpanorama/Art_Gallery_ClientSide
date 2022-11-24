import axios from "axios";





const axiosInstance = axios.create({
//   baseURL: "https://samia.co.il/",
  baseURL: "https://morcmario.com/",
  

});


// axiosInstance.defaults.headers.common['Authorization'] = token

export default axiosInstance;
