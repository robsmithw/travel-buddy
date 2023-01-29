import { getEventListeners } from "events";
import React, { useState, useEffect, Fragment } from "react";
import { isElementAccessExpression, setConstantValue } from "typescript";
import { eventsAPI } from "../../API/eventsAPI";
import { eventModel, INIT_EVENT_MODEL_DATA } from "../../Models/eventModel";
import EventDetails from "../EventDetails/EventDetails";

function EventList() {
  const [eventCheckList, setEventCheckList] = useState<Array<eventModel>>([]);
  const [eventDetails, setEventDetails] = useState<eventModel>(
    INIT_EVENT_MODEL_DATA
  );

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
          } else {
            x.checkedValue = false;
          }

          return x;
        })
      );

    setEventDetails(findChecked());
  }

  function findChecked() {
    if (eventCheckList !== undefined) {
      for (let i = 0; i < eventCheckList.length; i++) {
        if (eventCheckList[i].checkedValue === true) {
          return eventCheckList[i];
        }
      }
    }
    return INIT_EVENT_MODEL_DATA;
  }

  return (
    <Fragment>
      <div className="eventList">
        Event List
        <ul>
          {eventCheckList.map((x) => (
            <li>
              {" "}
              <input
                id={x.name}
                key={x.name}
                type="radio"
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
      <EventDetails EventDetails={eventDetails} />
    </Fragment>
  );
}

export default EventList;
