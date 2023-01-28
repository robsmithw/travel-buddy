import React ,{useState, useEffect} from 'react'
import { eventModel } from '../../Models/eventModel'

function EventDetails() {
  const[EventDetails, setEventDetails]= useState<eventModel>({category: 'concert', date: "11/27/22", name: "the_smiths", time: "11:30am"})
  return (
    <div className="eventDetails">
      <h1> Event Details</h1>
      <p> {EventDetails.category}</p>
      <p> {EventDetails.date}</p>
      <p> {EventDetails.name}</p>
      <p> {EventDetails.time}</p>
    </div>
  )
}

export default EventDetails