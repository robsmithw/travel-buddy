import React, { useState, useEffect } from "react";
import { eventModel } from "../../Models/eventModel";

function EventDetails(props: { EventDetails: eventModel }) {
  return (
    <div className="border border-succes p-2 mt-2">
      <div className="eventDetails">
        <h1> Event Details</h1>

       
        <div className="row">
          <div className="col">
            <p> {props.EventDetails.name}</p>
          </div>
          <div className="col">
            <div className="row">
              <p> {props.EventDetails.date}</p>
            </div>
            <div className="row">
              <p> {props.EventDetails.time}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <p> {props.EventDetails.category}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
