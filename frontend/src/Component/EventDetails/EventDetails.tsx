import React ,{useState, useEffect} from 'react'
import { eventModel } from '../../Models/eventModel'

function EventDetails(props: { EventDetails: eventModel }) {
  return (
    <div className="eventDetails">
      <h1> Event Details</h1>
      <p> {props.EventDetails.category}</p>
      <p> {props.EventDetails.date}</p>
      <p> {props.EventDetails.name}</p>
      <p> {props.EventDetails.time}</p>
    </div>
  )
}

export default EventDetails