import React, { useState, useEffect, useRef } from "react";
import searchbar from "../assets/search.png";
import "../styles/navbar.css";
import face from "../assets/faceicon.png";
import bell from "../assets/bell.png";
import netflixlogo from "../assets/netflixlogo.png";
import { Link, NavLink, useNavigate, } from "react-router-dom";

const Navbar = (props) => {
  const [ishover, setIsHover] = useState(false);
  const [ishover1, setIsHover1] = useState(false);
  const [isscrolled, setIsScrolled] = useState(false);
  let navigation=useNavigate()

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  console.log(isscrolled);
  props.ishr(ishover);
  props.ishr1(ishover1);
  const imgclick = () => {
    document.getElementById("search").style.pointerEvents = "auto";
    document.getElementById("search").style.border = "0.1px solid white";
    document.getElementById("search").style.width = "200px";
    document.getElementById("search").style.transitionDuration = "1.5s";
    document.getElementById("search").style.transitionDelay = "0.1s";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("im1").style.visibility = "hidden";
    document.getElementById("im1").style.pointerEvents = "none";
  };
  let a = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!a.current.contains(e.target)) {
        document.getElementById("search").style.pointerEvents = "none";
        document.getElementById("search").style.border = "none";
        document.getElementById("search").style.width = "0px";
        document.getElementById("search").style.transitionDuration = "1.5s";
        document.getElementById("search").style.transitionDelay = "0.1s";
        document.getElementById("search").style.visibility = "hidden";
        document.getElementById("im1").style.visibility = "visible";
        document.getElementById("im1").style.pointerEvents = "auto";
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  let logohandler=()=>{
    navigation("/")
  }

  return (
    <div className={`navbar ${isscrolled && "scrll"}`}>
      <div className="part1">
        <div className="logo">
          <img
          onClick={logohandler}
            src={netflixlogo}
            style={{ width: "100px", height: "20px",cursor:"pointer" }}
            alt=""
          />
        </div>
        <div className="navlinks">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/mylist'>My List</NavLink>
          
        </div>
      </div>
      <div className="secright">
        <div style={{ position: "relative", right: "4px" }}>
          <input
            ref={a}
            style={{
              marginTop: "15px",
              position: "relative",
              top: "-10px",
              left: "30px",
              visibility: "hidden",
            }}
            id="search"
            type="text"
            placeholder="Titels,people,genres"
          />

          <img
            style={{ marginTop: "9px" }}
            src={searchbar}
            id="im1"
            alt=""
            onClick={imgclick}
          />
        </div>
        <div
          className="chldn"
          style={{
            marginTop: "14px",
            marginLeft: "10px",
            marginRight: "10px",
            color: "white",
          }}
        >
          Children
        </div>
        <div className="notification" style={{ cursor: "pointer" }}>
          <img
            style={{ width: "25px", height: "25px", marginTop: "13px" }}
            src={bell}
            onMouseOver={() => setIsHover1(true)}
            onMouseOut={() => setIsHover1(false)}
            alt=""
          />
        </div>
        <div
          className={`tog1 ${ishover ? "tog1hvr" : ""}`}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <div>
            <img src={face} alt="" />
          </div>
          <span
            className={`sp1 ${ishover ? "sp1hvr" : ""}`}
            role="presentation"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
