import React, { useState, useEffect } from 'react'
import "./Timer.css"

const Timer = (props) => {

  let sDate = new Date(props.startDate).getDate().toString();
  let sMonth = new Date(props.startDate).getMonth().toString();
  let sYear = new Date(props.startDate).getFullYear().toString();
  console.log(props.startDate);

  
  let eDate = new Date(props.endDate).getDate().toString();
  let eMonth = new Date(props.endDate).getMonth().toString();
  let eYear = new Date(props.endDate).getFullYear().toString();


// let temp = startYear.concat("-",startMonth, "-", startDate);



    const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date(sYear, sMonth, sDate);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), 
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24), 
        min: Math.floor((difference / 1000 / 60) % 60), 
        sec: Math.floor((difference / 1000) % 60), 
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  if(props.status == "Past"){
    return (
      <>
        <div className='endTitle'>Ended On</div>
        <div>{new Date(props.endDate).toDateString()}</div>
      </>
    )
  }

  else if(props.status == 'Upcomming'){
    return (
      <>
      <div className='endTitle'>Starts in</div>
        {timerComponents.length ? timerComponents : <span></span>}
      </>
    );
  }

  else if(props.status == 'Active') {
    return (
      <>
      <div className='endTitle'>Ends on</div>
      <div>{new Date(props.endDate).toDateString()}</div>
      </>
    )
  }

}

export default Timer;