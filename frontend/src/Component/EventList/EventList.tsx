import { getEventListeners } from "events";
import React, { useState, useEffect, Fragment } from "react";
import { isElementAccessExpression, setConstantValue } from "typescript";
import { eventsAPI } from "../../API/eventsAPI";
import { eventModel, INIT_EVENT_MODEL_DATA } from "../../Models/eventModel";
import EventDetails from "../EventDetails/EventDetails";

type EventListProps = {
  eventCheckList: Array<eventModel>;
};

function EventList(props: EventListProps) {
  const [eventCheckList, setEventCheckList] = useState<Array<eventModel>>([]);
  const [eventDetails, setEventDetails] = useState<eventModel>(
    INIT_EVENT_MODEL_DATA
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    //when page loads we do this function
    if (props.eventCheckList !== undefined) {
      setEventCheckList(eventCheckList);
      setIsLoaded(true);
    }
    console.log(props.eventCheckList);
    setEventCheckList(props.eventCheckList);
  }, [props.eventCheckList]);

  function handleCheckbox(e: any) {
    //function that handles checkbox inputs
    if (eventCheckList !== undefined)
      setEventCheckList(
        eventCheckList.map((x) => {
          if (x.title === e.target.id) {
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
      <div className="row">
        <div className="col border border-primary p-2 mt-2 rounded-5 border-2">
          <div className="eventList">
            <h1>Event List</h1>
            {eventCheckList.map((x) => (
              <div className="form-check">
                <input
                  className="form-check-input"
                  id={x.title}
                  key={x.title}
                  type="radio"
                  checked={x.checkedValue}
                  onClick={(e) => {
                    handleCheckbox(e); //calling the functiion when clicked passes "e(event)"
                  }}
                />
                <label className="form-check-label">{x.title}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="col">
          <EventDetails EventDetails={eventDetails} />
        </div>
      </div>
    </Fragment>
  );
}

export default EventList;
