import React from "react";
import { axiosInstance } from "./AxiosConfig";
import { eventListURL, getFilteredEventsUrl } from "./urlconstants";

export const eventsAPI = {
  //const response = getEventList().data
  getEventList: function () {
    //function to get event list from "database"
    return axiosInstance.request({ method: "get", url: eventListURL }); // when called
  },
  getFilteredEvents: function (
    startDate: string,
    endDate: string,
    location: string,
    milesToSearch?: string
  ) {
    return axiosInstance.request({
      method: "get",
      url: getFilteredEventsUrl,
      params: {
        startdate: startDate,
        enddate: endDate,
        location: location,
        miles_range: milesToSearch,
      },
    });
  },
};
