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
            <p>Name:</p>
            <p> {props.EventDetails.title}</p>
            <p>Description:</p>
            <p> {props.EventDetails.description}</p>
            <p>Public:</p>
            <p> {props.EventDetails.private}</p>
          </div>
          <div className="col">
            <div className="row">
            <p>Event Start:</p>
              <p> {props.EventDetails.start}</p>
            </div>
            <div className="row">
            <p>Event End:</p>
              <p> {props.EventDetails.end}</p>
              <p>Category:</p>
          <p> {props.EventDetails.category}</p> 
          <p>Timezone:</p>
          <p> {props.EventDetails.timezone}</p>
            </div>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default EventDetails;
