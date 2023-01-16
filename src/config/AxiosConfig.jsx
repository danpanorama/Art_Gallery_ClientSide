import axios from "axios";





const axiosInstance = axios.create({
//   baseURL: "https://samia.co.il/",
  baseURL: "https://morcmario.com/",
  // baseURL: "https://54.95.206.170:3040/",

 
  

});


// axiosInstance.defaults.headers.common['Authorization'] = token

export default axiosInstance;
