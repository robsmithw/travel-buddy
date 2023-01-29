import React, { useState, useEffect } from "react";
import { eventModel } from "../../Models/eventModel";

function EventDetails(props: { EventDetails: eventModel }) {
  return (
    //<div className="col border border-primary p-2 mt-2 rounded-5 border-2">
    <div className="border border-primary p-2 mt-4 rounded-5 border-2 ">
      <div className="eventDetails">
        <h2 className= "text-center"> Event Details</h2>

        <div className="row">
          <div className="col">
            <b>Name:</b>
            <p> {props.EventDetails.title}</p>
            <b>Description:</b>
            <p> {props.EventDetails.description}</p>
            <b>Public:</b>
            <p> {props.EventDetails.private}</p>
          </div>
          <div className="col">
            <div className="row">
            <b>Event Start:</b>
              <p> {props.EventDetails.start}</p>
            </div>
            <div className="row">
            <b>Event End:</b>
              <p> {props.EventDetails.end}</p>
              <b>Category:</b>
          <p> {props.EventDetails.category}</p> 
          <b>Timezone:</b>
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
