import React from "react";
import "./FrontPage.css";

const FrontPage = (props) => {

  const HandlerEvent = () => {
    props.onClickEvent();
  }

  return (
    <>
      <div className="list_body">
        <nav className="nav_bar">
          <nav className="nav_icon">
            <img
              width="82px"
              height="39px"
              src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1668384000&Signature=LJohw53McWLZpkFmq1NAp911kx-GQWPGKzCr-DLGSkchi627Sp30tobWElNhxt2RXcgCXvRzIjfMYNWaw6oOsd7tN-qP8VHYGjSvKoymg40fBEudERVHoF8vzUYpgyD4D7UIsYWPFL2tyaGizBMm0XjomFbX00y78KIxrpfNn-b9A8U1VIgPKzoKZfrdnSX~QH0DhrmUXQpbF9tCSTkWpDGtg9YbYUwLBXNBfw3W5hmYZvWU4nJzcYdLynP4Blm21WeZhTJNCxEg88uDN23Q5PQ7z00QPfUN1dqnAbvAkB6pLh3dQ2ur~ySZTCUI1AidnpR6dlzzfPgRkqyU1NdVfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
          </nav>
        </nav>
        <div className="list_description">
          <div className="desc">
            <h1>Accelerate Innovation with Global AI Challenges</h1>
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <button onClick={HandlerEvent}>Create Challenge</button>
          </div>
          <div className="rocket"></div>
        </div>
      </div>
      <div className="list_bottom">
            <div className="btm_content">
                <nav className="cntent">
                    <nav className="btm_desc">
                      <nav className="btm_h">100k+</nav>
                      <p>AI model submissions</p>
                    </nav>
                    <nav className="btm_desc">
                      <nav className="btm_h boder_">50k+</nav>
                      <p>Data Scientist</p>
                    </nav>
                    <nav className="btm_desc">
                      <nav className="btm_h">100+</nav>
                      <p>AI Challenges Hosted</p>
                    </nav>
                </nav>
            </div>
        </div>
    </>
  );
};

export default FrontPage;
