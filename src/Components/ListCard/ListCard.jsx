import React, { useState, useEffect } from "react";
import "./ListCard.css";
import Timer from "../Timer/Timer";

const ListCard = (props) => {
  const [status, setStatus] = useState();

  useEffect(() => {
    let d1 = new Date().getTime();
    let d2 = new Date(props.start).getTime();
    let d3 = new Date(props.end).getTime();

    if (d1 > d2 && d1 < d3) {
      setStatus("Active");
    } 
    
    else if (d1 > d2) {
      setStatus("Past");
    }
    
    else if (d1 < d3) {
      setStatus("Upcomming");
    }
  }, []);

  const HandlerEvent = () => {
    props.onClickEvent();

    props.detailPassed(props);
  }

  return (
    <>
      <div className="card_body">
        <div className="preview">
          {/* <img src="" alt="Image" /> */}
        </div>
        <div className="status_body">
          <div className="status">{status}</div>
        </div>
        <div className="card_heading">{props.name}</div>
        <div className="timer">
          <Timer 
          startDate={Date(props.start)}
          endDate={Date(props.end)}
          status={status} /> 
        </div>
        <div className="participate_">
          <button onClick={HandlerEvent} className="participate_btn">Participate Now</button>
        </div>
      </div>
    </>
  );
};

export default ListCard;
