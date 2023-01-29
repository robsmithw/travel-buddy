import React, { useState, useEffect } from "react";
import { eventModel } from "../../Models/eventModel";

function EventDetails(props: { EventDetails: eventModel }) {
  return (
    //<div className="col border border-primary p-2 mt-2 rounded-5 border-2">
    <div className="border border-primary p-2 mt-2 rounded-5 border-2">
      <div className="eventDetails">
        <h1> Event Details</h1>

        <div className="row">
          <div className="col">
            <p> {props.EventDetails.title}</p>
          </div>
          <div className="col">
            <div className="row">
              <p> {props.EventDetails.start}</p>
            </div>
            <div className="row">
              <p> {props.EventDetails.end}</p>
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
