import { getEventListeners } from "events";
import React, { useState, useEffect } from "react";
import { setConstantValue } from "typescript";
import { eventsAPI } from "../../API/eventsAPI";
import { eventModel } from "../../Models/eventModel";
import EventDetails from "../EventDetails/EventDetails";

function EventList() {
  const [eventCheckList, setEventCheckList] = useState<Array<eventModel>>([]);

  useEffect(() => {
    //when page loads we do this function
    eventsAPI
      .getEventList()
      .then((response) => {
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
          if (x.name === e.target.id) {
            x.checkedValue = e.target.checked; //reasssings value to check if its true
          }
          return x;
        })
      );
  }

  return (
    <div className="eventList">
      Event List
      <ul>
        {eventCheckList.map((x) => (
          <li>
            {" "}
            <input
              id={x.name}
              key={x.name}
              type="checkbox"
              checked={x.checkedValue}
              onClick={(e) => {
                handleCheckbox(e); //calling the functiion when clicked passes "e(event)"
              }}
            />
            <span>{x.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
