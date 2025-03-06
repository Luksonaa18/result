import React from "react";
import reaction from "../../assets/flash.png";
import brain from "../../assets/brain.png";
import chat from "../../assets/chat.png";
import visual from "../../assets/eye.png";
import "./summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <div className="summary-info">
        <div className="reaction">
          <div className="image-rn">
            <img src={reaction} alt="" />
            <span className="rtc">Reaction</span>
          </div>
          <div className="par-1">
            <p className="par">80</p>
            <p className="par1">/ 100</p>
          </div>
        </div>
        <div className="memory">
          <div className="image-rn">
            <img src={brain} alt="" />
            <span className="rtc-1">Memory</span>
          </div>
          <div className="par-1">
            <p className="par">80</p>
            <p className="par1">/ 100</p>
          </div>
        </div>
        <div className="verbal">
          <div className="image-rn">
            <img src={chat} alt="" />
            <span className="rtc-2">Verbal</span>
          </div>
          <div className="par-1">
            <p className="par">80</p>
            <p className="par1">/ 100</p>
          </div>
        </div>
        <div className="visual">
          <div className="image-rn">
            <img src={visual} alt="" />
            <span className="rtc-3">Visual</span>
          </div>

          <div className="par-1">
            <p className="par">80</p>
            <p className="par1">/ 100</p>
          </div>
        </div>
      </div>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
