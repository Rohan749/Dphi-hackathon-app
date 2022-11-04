import React, { useState } from "react";
import "./App.css";
import Challenges from "./Components/Challenges/Challenges";
import CreateHack from "./Components/CreateHackathon/CreateHack";
import InfoPage from "./Components/InfoPage/InfoPage";
import FrontPage from "./Components/FrontPage/FrontPage";
import DetailPage from "./Components/DetailPage/DetailPage";
import EditHack from "./Components/EditHackathon/EditHack";

function App() {
  const [val, setVal] = useState(false);
  const [detailVal, setDetailVal] = useState(false);
  const [editVal, setEditVal] = useState(false);

  const [details, setDetails] = useState({});

  const [ListItems, setListItems] = useState([
    {
      name: "Data Science Bootcamp Graded Datathon",
      start: "2022-10-2",
      end: "2032-5-16",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Hard",
    },
    {
      name: "Data Sprint 72 - Butterfly Identification",
      start: "2023-1-1",
      end: "2023-1-10",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Easy",
    },
    {
      name: "Data Sprint 71 - Weather Recognition",
      start: "2020-5-5",
      end: "2027-6-1",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Medium",
    },
    {
      name: "Data Sprint - Airline Passenger Satisfaction",
      start: "2021-3-4",
      end: "2023-3-4",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Easy",
    },
    {
      name: "Engineering Graduates Employment Outcomes",
      start: "2022-5-2",
      end: "2022-7-1",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Easy",
    },
    {
      name: "Travel Insurance Claim Prediction",
      start: "2022-8-4",
      end: "2022-9-4",
      status: "",
      description: "Identify the class to which each butterfly belongs to",
      image: "url",
      level: "Medium",
    },
  ]);

  const ClickHandler = () => {
    if (!val) setVal(true);
    else setVal(false);
  };

  const DetailClickHandler = () => {
    if (!detailVal) setDetailVal(true);
    else setDetailVal(false);
  };

  const OnValueAddHandler = (newObj) => {
    setListItems([...ListItems, newObj]);

    console.log(ListItems);
  };

  const ValueFunction = (Value) => {
    setDetails({
      name: Value.name,
      start: Value.start,
      end: Value.end,
      description: Value.description,
      level: Value.level,
      status: Value.status,
    });
  };

  const onDeleteItemHandler = (deleteVal) => {
    setListItems((prevItems) => {
      const updatedItem = prevItems.filter(
        (preItem) => preItem.name !== deleteVal.name
      );
      console.log(updatedItem);

      setDetailVal(false);

      return updatedItem;
    });
  };

  const EditClickHandler = () => {
    if (!editVal) setEditVal(true);
    else setEditVal(false);
  }

  const EditedValueHandler = (editedVal) => {
    console.log(editedVal);
  }



  if (val) {
    return (
      <div className="App">
        <CreateHack 
        onClickEvent={ClickHandler} 
        newValue={OnValueAddHandler} />
      </div>
    );
  }

  else if(editVal) {
    return (
      <div className="App">
        <EditHack
        editedValue={EditedValueHandler}
        />
      </div>
    )
  }

  else if (detailVal) {
    return (
      <div className="App">
        <DetailPage
          onClickEvent={DetailClickHandler}
          onClickDelete={onDeleteItemHandler}
          onClickEdit={EditClickHandler}
          DetailPrinted={details}
        />
      </div>
    );
  }
  
  else {
    return (
      <div className="App">
        <FrontPage onClickEvent={ClickHandler} />
        <InfoPage />
        <Challenges
          detailValFunction={ValueFunction}
          onClickEvent={DetailClickHandler}
          lists={ListItems}
        />
      </div>
    );
  }
}

export default App;

