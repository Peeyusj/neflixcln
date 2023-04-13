import React, { useState, useRef,useEffect } from "react";
import frn from "../assets/friends.mp4";
import "../styles/videoposter.css";
import mute from "../assets/postermute.png";
import unmute from "../assets/posterunmute.png";
import play from "../assets/play.png";
import { useNavigate } from "react-router-dom";

const Videoposter = () => {
  let navigation=useNavigate()
  const [ismute, setIsMute] = useState(true);
  let vid = useRef();
  // useEffect(()=>{})
  let playfn = () => {
    console.log("play");
    setTimeout(() => {
     vid.current&&vid.current.play();
    }, 200);
  };
  let pausefn = () => {
    console.log("pause");
    setTimeout(() => {
      vid.current&&vid.current.pause();
    }, 800);
  };
  let playhandler=(event)=>{
    
    navigation("/videoplayer")
    event.stopPropagation();
  }
  let infohandler=()=>{
    navigation("/")
  }
  return (
    <div className="videopostcontainer">
      <video
        onMouseOver={playfn}
        onMouseOut={pausefn}
        ref={vid}
        className="vidposter"
        src={frn}
        muted={ismute}
        type="video/mp4"
      ></video>
      <div className="contentvid" >
        <div className="leftcontent">
          <img
            src="https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZ-_pLrhWg99cs39AWwFo8jcIX_BrZ446YSJlFOA4WWkgay7MPGsbIMov9Sr-pNZ0TMJn0pbz2D0tI5PouaottM6z3HfjdUNhWk6aDJ8EJfhw-8BGimUQ3DESTB8xCDrENvjpbGLRxhdFy5kGTD6kN-AiadEnveY0qh_3cmQDGwXCNW-NYjdxw.webp?r=677"
            alt=""
          />
          <div
            style={{
              display: "flex",
              width: "540px",
              marginLeft: "60px",
              marginTop: "10px",
              marginBottom: "10px",
              textAlign: "left",
            }}
          >
            This gripping docuseries follows New York City's frontline medical
            professionals as they balance the intensity of their work with their
            personal lives
          </div>
          
        </div>
        <div className="rightcontent">
          <div className="mutediv">
            <img
              className="muteimg"
              onClick={() => {
                setIsMute(!ismute);
              }}
              src={ismute ? mute : unmute}
              alt=""
            />
          </div>
          <div className="Rated">U/A</div>
        </div>
      </div>
      <div className="pbtns">
            <button
            onClick={(event)=>playhandler(event)}
              style={{
                backgroundImage: `url(${play})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                textIndent: "40px",
                fontSize: "20px",
                position:"relative",
                zIndex:1,
                pointerEvents:"all"
              }}
            >
              {" "}
              Play
            </button>
            <button 
                   onClick={infohandler}
            className="infobtn" style={{ fontSize: "20px", position:"relative",
                zIndex:1,
                pointerEvents:"all" }}>
              More Info
            </button>
          </div>
    </div>
  );
};

export default Videoposter;
