import React from 'react';
import Nav from "./Component/Nav/Nav"
import {Router} from "react-router-dom";
import FindEvents from './Component/Events/FindEvents';
import EventList from './Component/EventList/EventList';
import EventDetails from './Component/EventDetails/EventDetails';




function App() {
  return (
    <>
      <Nav/>
      <div className='container'>
        <FindEvents />
        <EventList />
      </div>
     
    </>
  );
}

export default App;
