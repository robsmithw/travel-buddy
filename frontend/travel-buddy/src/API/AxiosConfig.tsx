import axios from "axios";
import * as urlConstants from './urlconstants';

 export const  axiosInstance = axios.create( { //set up axios 
    withCredentials: false,
    baseURL: urlConstants.baseURL

})
