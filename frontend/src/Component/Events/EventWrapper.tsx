import React, { useState } from "react";
import { eventModel } from "../../Models/eventModel";
import EventList from "../EventList/EventList";
import FindEvents from "./FindEvents";

function EventWrapper() {
  return (
    <>
      <FindEvents />
    </>
  );
}

export default EventWrapper;
