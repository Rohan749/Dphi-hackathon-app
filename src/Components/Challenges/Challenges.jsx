import React from "react";
import ListCard from "../ListCard/ListCard";
import "./Challenges.css";

const Challenges = (props) => {

  const DetailsHandler = (detailValue) => {
    props.detailValFunction(detailValue)
  }

  return (
    <>
      <div className="chlnge_header">
        <div className="_head">
          <h1>Explore Challenges</h1>
          <div className="search_container">
            <input className="search_box"></input>
            <div>
              <select className="dropDown" id="dog-names">
                <option value="" defaultValue>Filter</option>
                <option value="">Dave</option>
                <option value="">Pumpernickel</option>
                <option value="">Reeses</option>
              </select>
            </div>
          </div>
        </div>
        <div className="hackathon_container">
          {props.lists.map(list=>
          <ListCard 
          detailPassed={DetailsHandler}
          onClickEvent={props.onClickEvent}
          key={Math.random().toString()}
          name={list.name}
          start={list.start}
          end={list.end}
          status={list.status}
          description={list.description}
          image={list.image}
          level={list.level}
          />
          )}
        </div>
      </div>
    </>
  );
};

export default Challenges;
