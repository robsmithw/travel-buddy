import React from "react";
import Nav from "./Component/Nav/Nav";
import { Router } from "react-router-dom";
import FindEvents from "./Component/Events/FindEvents";
import EventList from "./Component/EventList/EventList";
import EventDetails from "./Component/EventDetails/EventDetails";
import EventWrapper from "./Component/Events/EventWrapper";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <EventWrapper />
      </div>
    </>
  );
}

export default App;
