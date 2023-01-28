import { getEventListeners } from "events";
import React, { useState, useEffect } from "react";
import { setConstantValue } from "typescript";
import { eventsAPI } from "../../API/eventsAPI";
import { eventModel } from "../../Models/eventModel";

type EventModelType = {
  eventData: eventModel;
  checkValue: boolean;
};

function EventList() {
  const [eventCheckList, setEventCheckList] =
    useState<Array<{ eventData: eventModel; checkValue: boolean }>>();
  useEffect(() => {
    console.log(eventsAPI);
    //when page loads we do this function
    eventsAPI.getEventList().then((response) => {
      setEventCheckList(response.data);
      console.log(response);
    })
    .catch((e) => console.log(e));
  }, []);
  function handleCheckbox(e: any) {
    //function that handles checkbox inputs
    if (eventCheckList !== undefined)
      setEventCheckList(
        eventCheckList.map((x) => {
          if (x.eventData.name === e.target.id) {
            x.checkValue = e.target.checked; //reasssings value to check if its true
          }
          return x;
        })
      );
  }

  return (
    <div className="eventList">
      Event List
      <ul>
        {eventCheckList?.map((x) => (
          <li>
            {" "}
            <input
              id={x.eventData.name}
              type="checkbox"
              checked={x.checkValue}
              onClick={(e) => {
                handleCheckbox(e); //calling the functiion when clicked passes "e(event)"
              }}
            />
            <span>{x.eventData.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
