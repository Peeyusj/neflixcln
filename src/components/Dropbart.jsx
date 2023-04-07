import React, { useState } from "react";
import imggg1 from "../assets/mh370.jpg";
import imggg2 from "../assets/ranunaidu.jpg";
import imggg3 from "../assets/wakeupsid.jpg";
import "../styles/dropbart.css";
import up from "../assets/up.png";
const Dropbart = (props) => {
  let List = [
    {
      id: 1,
      imm: imggg1,
      title: "New Arival",
      msg: "MH370:The Plane That",
      time: "6 days ago",
    },
    {
      id: 1,
      imm: imggg2,
      title: "New Arival",
      msg: "MH370:The Plane That",
      time: "6 days ago",
    },
    {
      id: 1,
      imm: imggg3,
      title: "New Arival",
      msg: "MH370:The Plane That",
      time: "6 days ago",
    },
  ];
  const [ishoverDrop2, setIsHvrDrop2] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="i">
        <img
          className={`im3up ${props.val1 || ishoverDrop2 ? "im3uphvr" : ""}`}
          src={up}
          alt=""
        />
      </div>
      <div
        className={`t  ${props.val1 ? "thvr" : ""} ${
          ishoverDrop2 ? "dropbar2active2" : ""
        }  `}
        onMouseOver={() => setIsHvrDrop2(true)}
        onMouseOut={() => setIsHvrDrop2(false)}
      >
        {List.map((data) => (
          <div id={data.id} key={data.id} className="dropbarout">
            {ishoverDrop2 && console.log("hiii")}
            <div className="im" style={{ zIndex: "2" }}>
              <img src={data.imm} alt="hiiiiiiii" style={{ zIndex: "2" }} />
              <div
                className="back1"
                style={{ zIndex: "-2", pointerEvents: "none" }}
              ></div>
              <div
                className="back2"
                style={{ zIndex: "-2", pointerEvents: "none" }}
              ></div>
            </div>
            <div
              className="txt"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "7px",
              }}
            >
              <div className={`notificationlinks ${data.title} `}>
                {data.title}
              </div>
              <div className={`notificationlinks ${data.msg} `}>{data.msg}</div>
              <div
                className={`notificationlinks ${data.time} `}
                style={{ color: "gray" }}
              >
                {data.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropbart;
