import React from "react";
import {axiosInstance}  from "./AxiosConfig";
import { eventListURL } from "./urlconstants";

export const eventsAPI = {

    //const response = getEventList().data
    getEventList: function() {  //function to get event list from "database"
   return axiosInstance.request({ method: "get", url: eventListURL }); // when called 
  }
}
