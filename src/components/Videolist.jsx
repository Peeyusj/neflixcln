import React, { useRef, useState } from "react";
import Videolistcard from "./Videolistcard";
import classes from "../styles/videolist.module.css";
import rightarrow from "../assets/swiperight.png";
import lefttarrow from "../assets/swipeleft.png";
import data from "./data";

const Videolist = (props) => {
  let toprated = data.filter((items) => +items.rating.average > 8);
  const [scrollcount, setscrollCount] = useState(0);
  let element = useRef();
  const leftclickhandler = (msg) => {
    console.log(msg);
    setscrollCount(scrollcount - 6);
    if (scrollcount > 0) {
      let distance = element.current.getBoundingClientRect().x - 50;
      element.current.style.transform = `translateX(${233 * 6 + distance}px)`;
    }
  };
  const rightclickhandler = (msg) => {
    let lastelement =
      element.current.children[
        element.current.children.length - 1
      ].getBoundingClientRect().x - 50;
    console.log(lastelement);
    setscrollCount(scrollcount + 6);
    if (lastelement > 1232) {
      console.log(scrollcount);
      let distance = element.current.getBoundingClientRect().x - 50;
      element.current.style.transform = `translateX(${-233 * 6 + distance}px)`;
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <img
        className={`${classes.leftarrow} ${
          scrollcount ? classes.leftarrowhvrok : classes.leftarrowhvrnok
        } `}
        onClick={() => leftclickhandler(props.categ)}
        src={lefttarrow}
        alt=""
      />
      <img
        className={classes.rightarrow}
        onClick={() => rightclickhandler(props.categ)}
        src={rightarrow}
        alt=""
      />
      <div className={classes.listoutercontainer} ref={element}>
        {props.categ === "toprated" &&
          toprated.map(
            (items) =>
              +items.rating.average > 8 && (
                <Videolistcard
                  id={items.id}
                  image={items.image.original}
                  name={items.name}
                  runtime={items.runtime}
                  rating={items.rating.average}
                  genres={items.genres}
                  status={items.status}
                />
              )
          )}
      </div>
    </div>
  );
};

export default Videolist;
