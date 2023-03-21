import React, { useState } from "react";
import "../styles/navbar.css";
import netflix from "../assets/netflix.png";
import pencil from "../assets/pencil.png";
import question from "../assets/question.png";
import prmng from "../assets/user.png";
import profile from "../assets/user1.png";
import up from "../assets/up.png";

const Dropbar = (props) => {
  const [ishoverDrop1, setIsHoverDrop1] = useState(false);
  return (
    <div>
      <img
        className={`im2up ${props.val || ishoverDrop1 ? "im2uphvr" : ""} `}
        src={up}
        alt=""
      />
      <div
        className={`dropbar ${props.val ? "dropbaractive " : ""} ${
          ishoverDrop1 ? " dropbar1active1" : ""
        }`}
        onMouseOver={() => setIsHoverDrop1(true)}
        onMouseOut={() => setIsHoverDrop1(false)}
      >
        <div className="dropbar1content">
          <img
            src={netflix}
            alt=""
            style={{  width: "20px", height: "20px" }}
          />
          <div style={{  }} className="alinks">Children</div>
        </div>
        <div className="dropbar1content">
          <img
            src={pencil}
            alt=""
            style={{  width: "20px", height: "20px" }}
          />
          <div style={{  }} className="alinks" >Manage Profiles</div>
        </div>
        <div className="dropbar1content">
          <img
            src={prmng}
            alt=""
            style={{  width: "20px", height: "20px" }}
          />
          <div style={{  }} className="alinks">Transfer Profiles</div>
        </div>
        <div className="dropbar1content">
          <img
            src={profile}
            alt=""
            style={{  width: "20px", height: "20px" }}
          />
          <div style={{  }} className="alinks">Accounts</div>
        </div>
        <div className="dropbar1content">
          <img
            src={question}
            alt=""
            style={{  width: "20px", height: "20px" }}
          />
          <div style={{ }} className="alinks">Help Centre</div>
        </div>
        <hr style={{ color: "white" }} />
        <div style={{ textAlign: "center", marginLeft: "27px" }}>
          Sign out of Netflix{" "}
        </div>
      </div>
    </div>
  );
};

export default Dropbar;
