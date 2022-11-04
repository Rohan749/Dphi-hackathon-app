import React from "react";
import "./DetailPage.css";

const DetailPage = (props) => {

  const DeleteItemHandler = () => {
    props.onClickDelete(props.DetailPrinted);
  }

  const EditItemHandler = () => {
    props.onClickEdit()
  }

  return (
    <>
      <div className="detail_body">
        <nav className="nav_bar">
          <nav className="nav_icon">
            <img
              width="82px"
              height="39px"
              src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1668384000&Signature=LJohw53McWLZpkFmq1NAp911kx-GQWPGKzCr-DLGSkchi627Sp30tobWElNhxt2RXcgCXvRzIjfMYNWaw6oOsd7tN-qP8VHYGjSvKoymg40fBEudERVHoF8vzUYpgyD4D7UIsYWPFL2tyaGizBMm0XjomFbX00y78KIxrpfNn-b9A8U1VIgPKzoKZfrdnSX~QH0DhrmUXQpbF9tCSTkWpDGtg9YbYUwLBXNBfw3W5hmYZvWU4nJzcYdLynP4Blm21WeZhTJNCxEg88uDN23Q5PQ7z00QPfUN1dqnAbvAkB6pLh3dQ2ur~ySZTCUI1AidnpR6dlzzfPgRkqyU1NdVfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
          </nav>
        </nav>
        <div className="detail_heading">
          <div className="timing">
            Starts on {props.DetailPrinted.start} 09:00 PM (India Standard Time)
          </div>
          <div className="name_challenge">
            {props.DetailPrinted.name}
          </div>
          <div className="detail_desc">
            {props.DetailPrinted.description}
          </div>
          <div className="level_box">{props.DetailPrinted.level}</div>
        </div>
        <div className="overview_body">
          <div className="overview_nav">
            <div className="overview">Overview</div>
            <div className="detail_btns">
              <button className="edit_btn" onClick={EditItemHandler}>Edit</button>
              <button className="dlt_btn" onClick={DeleteItemHandler}>Delete</button>
            </div>
          </div>
          <div className="overview_para">
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows. An agency of the Governmental Wildlife
            Conservation is planning to implement an automated system based on
            computer vision so that it can identify butterflies based on
            captured images. As a consultant for this project, you are
            responsible for developing an efficient model. Your Task is to build
            an Image Classification Model using CNN that classifies to which
            class of weather each image belongs to.
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
