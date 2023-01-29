import React, { ChangeEventHandler, useEffect, useState } from "react";
import { eventsAPI } from "../../API/eventsAPI";
import { eventModel } from "../../Models/eventModel";
import EventList from "../EventList/EventList";

function FindEvents() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [milesRadius, setMilesRadius] = useState("1");
  const [eventModels, setEventModels] = useState<Array<eventModel>>([]);

  useEffect(() => {}, [eventModels]);

  const handleFindEvents = () => {
    eventsAPI
      .getFilteredEvents(startDate, endDate, location, milesRadius)
      .then((response) => {
        setEventModels(response.data["results"]);
        console.log(response.data["results"]);
      })
      .catch((e) => console.log(e));
  };
// <div className="border border-primary p-2 mt-2 rounded-5 border-2">
  return (
    <>
    
      <div className="row">
        <div className="col-2">
          <label className="me-1 ">Enter City</label>
          <input
            className="form-control"
            type="text"
            placeholder="Nashville"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <label className="me-1"> Enter Search Radius</label>
          <input
            className="form-control"
            type="number"
            value={milesRadius}
            min="1"
            max="50"
            onChange={(e) => setMilesRadius(e.target.value)}
          ></input>
        </div>

        <div className="col-2">
          <label className="me-3">From</label>
          <input
            className="form-control"
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </div>
        <div className="col-3">
          <label className="me-3">To</label>
          <input
            className="form-control"
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </div>

        <div className="col-2">
          <br />
          <button
            className="btn btn-outline-dark form-control"
            onClick={handleFindEvents}
          >
            <i className="bi bi-search me-1"></i>
            Find Events
          </button>
        </div>
      </div>

      <EventList eventCheckList={eventModels} />
    </>
  );
}

export default FindEvents;
