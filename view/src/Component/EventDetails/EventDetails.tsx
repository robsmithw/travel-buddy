import React, { useState, useEffect } from "react";
import { eventModel } from "../../Models/eventModel";

function EventDetails(props: { EventDetails: eventModel }) {
  return (
    <div className="eventDetails">
      <h1> Event Details</h1>
      <p> {props.EventDetails.category}</p>
      <p> {props.EventDetails.start}</p>
      <p> {props.EventDetails.title}</p>
      <p> {props.EventDetails.end}</p>
    </div>
  );
}

export default EventDetails;
