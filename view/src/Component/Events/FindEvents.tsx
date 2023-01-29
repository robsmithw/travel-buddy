import React, { ChangeEventHandler, useState } from "react";
import { eventsAPI } from "../../API/eventsAPI";

function FindEvents() {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFindEvents = () => {
    eventsAPI
      .getFilteredEvents(startDate, endDate, location)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="Nav">
        <button className="btn" onClick={handleFindEvents}>
          Find Events{" "}
        </button>
      </div>
      <div className="userInput">
        Enter Location
        <br />
        <input type="text"></input>
      </div>

      <div>
        <div className="userInput">
          <br />
          From
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
          To
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
          <br />
        </div>
      </div>
    </>
  );
}

export default FindEvents;
