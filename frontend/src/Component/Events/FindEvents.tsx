import React from "react";

function FindEvents() {
  return (
    //<div className="col border border-primary p-2 mt-2 rounded-5 border-2">
    <div className="row">
      <div className="col-2">
        <label className= "me-1">Enter City</label>
        <input className="form-control" type="text"></input>
      </div>
      <div className="col-2">
        
        <label className="me-1"> Enter Search Radius</label>
        <input className="form-control" type="number" min="1" max="50"></input>
      </div>

      <div className="col-2">
        <label className="me-3">From</label>
        <input className="form-control" type="date"></input>
      </div>
      <div className="col-3">
        <label className="me-3">To</label>
        <input className="form-control" type="date"></input>
      </div>

      <div className="col-2">
        <br/>
        <button className="btn btn-outline-dark form-control" >
          <i className="bi bi-search me-1"></i>
          Find Events
        </button>
      </div>
    </div>
  );
}

export default FindEvents;
