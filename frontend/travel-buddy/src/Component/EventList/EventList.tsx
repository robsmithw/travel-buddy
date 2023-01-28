import { getEventListeners } from "events";
import React, { useState, useEffect } from "react";
import { setConstantValue } from "typescript";
import  {eventsAPI}  from "../../API/eventsAPI";
import { eventModel } from "../../Models/eventModel";

function EventList() {
  const [eventCheckList, setEventCheckList] = useState<{eventData: eventModel, checkValue: boolean}(
  
    // {
    //   itemText: "Concert",
    //   checkValue: false,
    // },
    // {
    //   itemText: "Dinner",
    //   checkValue: false,
    // },
    // {
    //   itemText: "Expo",
    //   checkValue: false,
    // },
  );
  useEffect(()=> {
//when page loads we do this function
eventsAPI.getEventList().then(response => {setEventCheckList(response.data)
console.log(response)});


  }, [])
  function handleCheckbox(e: any) {
    //function that handles checkbox inputs
    if(eventCheckList !== undefined)
      setEventCheckList(
        eventCheckList.map((x) => {
        if (x.itemText === e.target.id) {
          x.checkValue = e.target.checked; //reasssings value to check if its true
        }
        return x;
      })
    );
  }

  return (
    <div className="eventList">
      Event List
      <ul>
        {eventCheckList.map((x) => (
          <li>
            {" "}
            <input
              id={x.itemText}
              type="checkbox"
              checked={x.checkValue}
              onClick={(e) => {
                handleCheckbox(e); //calling the functiion when clicked passes "e(event)"
              }}
            />
            <span>{x.itemText}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
