import React from "react";
import "./InfoPage.css";

const InfoPage = () => {
  return (
    <>
    <div className="back_body">
      <div className="info_body">Why Participate in AI Challenges?</div>
      <div className="info_container">
        <div className="cont">
          <div className="inner_cont icn1" />
          <div className="inner_cont head">Prove your skills</div>
          <div className="inner_cont para">
            Gain substantial experience by solving real-world problems and pit
            against others to come up with innovative solutions.
          </div>
        </div>
        <div className="cont">
          <div className="inner_cont icn2" />
          <div className="inner_cont head">Learn from Community</div>
          <div className="inner_cont para">
            One can look and analyze the solutions submitted by the other Data
            Scientists in the community and learn from them.
          </div>
        </div>
      </div>

      <div className="info_container">
        <div className="cont">
          <div className="inner_cont icn3" />
          <div className="inner_cont head">Challenge Yourself</div>
          <div className="inner_cont para">
            There is nothing for you to lose by participating in a challenge.
            You can fail safe, learn out of the entire experience and bounce
            back harder.
          </div>
        </div>
        <div className="cont">
          <div className="inner_cont icn4" />
          <div className="inner_cont head">Earn Recognition</div>
          <div className="inner_cont para">
            You will stand out from the crowd if you do well in AI challenges,
            it not only helps you shine in the community but also earns rewards.
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default InfoPage;
