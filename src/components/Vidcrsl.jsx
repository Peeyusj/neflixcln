import "../App.css";
import "../styles/vidcrsl.css";
import Videolist from "./Videolist";

function Vidcrsl() {
  return (
    <div className="vidcrsl">
      <div className="list1">
        <div
          style={{
            textAlign: "left",
            marginBottom: "-12px",
            marginLeft: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Only on Netflix
        </div>
        <Videolist categ="toprated" />
      </div>
      <div className="list2">
        <div
          style={{
            textAlign: "left",
            marginBottom: "-12px",
            marginLeft: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Trending now
        </div>
        <Videolist categ="toprated" />
      </div>
    </div>
  );
}

export default Vidcrsl;
