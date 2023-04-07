import React, { useState } from "react";
import classes from "../styles/videolistcard.module.css";
import play from "../assets/play.png";
import add from "../assets/plus.png";
import thumbsup from "../assets/thumbsup.png";
import info from "../assets/swipedown.png";
import mute from "../assets/nosound.png";
import unmute from "../assets/volume.png";
import robin from "../assets/Robin.mp4";
const Videolistcard = (props) => {
  const [hvrhandler, setHvrhandler] = useState(false);
  const [ismute, setIsMute] = useState(false);

  return (
    <div
      className={`${classes.videoitem}`}
      onMouseOver={() => setHvrhandler(true)}
      onMouseOut={() => setHvrhandler(false)}
    >
      {hvrhandler && (
        <div className={classes.vidodiv}>
          <video
            className={classes.vido}
            src={robin}
            autoPlay={true}
            muted={ismute}
            loop
          ></video>
          <img
            className={classes.muteimg}
            onClick={() => {
              setIsMute(!ismute);
            }}
            src={ismute ? mute : unmute}
            alt=""
          />
        </div>
      )}
      <img className={classes.imgfirst} src={props.image} alt={props.name} />
      <div className={`${classes.content} ${hvrhandler ? "" : ""} `}>
        <div className={classes.icon}>
          <div className={classes.icon1}>
            <div style={{ marginLeft: "3px" }}>
              <img
                style={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "3px",
                  marginTop: "3px",
                }}
                src={play}
                alt=""
              />
            </div>
            <div style={{ marginLeft: "6px" }}>
              {" "}
              <img
                style={{
                  width: "17px",
                  height: "14px",
                  border: "2px solid #ffffff70",
                  borderRadius: "50%",
                  padding: "6px",
                  marginTop: "3px",
                }}
                src={add}
                alt=""
              />
            </div>
            <div style={{ marginLeft: "6px" }}>
              {" "}
              <img
                style={{
                  width: "18px",
                  height: "14px",
                  border: "2px solid #ffffff70",
                  borderRadius: "50%",
                  padding: "6px",
                  marginTop: "3px",
                }}
                src={thumbsup}
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              style={{
                width: "18px",
                height: "14px",
                border: "2px solid #ffffff70",
                borderRadius: "50%",
                padding: "6px",
                marginTop: "3px",
              }}
              src={info}
              alt=""
            />
          </div>
        </div>
        <div className={classes.txtinfo}>
          <div className={classes.inforow}>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "bolder",
                color: "rgb(0, 163, 108)",
              }}
            >
              {props.runtime}min
            </div>
            <div
              style={{
                marginRight: "37px",
                border: "2px solid #ffffff70",
                fontSize: "0.8em",
                height: "90%",
                width: "66px",
                paddingLeft: "6px",
                boxSizing: "border-box",
              }}
            >
              IMDB {props.rating}
            </div>
            <div
              style={{
                marginRight: "10px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {props.status}
            </div>
          </div>
          <div className={classes.genres}>
            <div>{props.genres[0]}</div>
            <div
              style={{
                margin: "8px 3px 0px 8px",
                width: "6px",
                backgroundColor: "gray",
                height: "4px",
                borderRadius: "100%",
              }}
            >
              {" "}
            </div>
            {props.genres[1] && (
              <div style={{ marginLeft: "5px" }}>{props.genres[1]}</div>
            )}
            <div
              style={{
                margin: "8px 3px 0px 5px",
                width: "6px",
                backgroundColor: "gray",
                height: "4px",
                borderRadius: "100%",
              }}
            >
              {" "}
            </div>
            {props.genres[2] && (
              <div style={{ marginLeft: "8px" }}>{props.genres[2]}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videolistcard;
