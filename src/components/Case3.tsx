import "../styles/case3.css";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";

const Case3 = () => {
  return (
    <div className="case3">
      <h2 id="case2H2">
        <NavLink to="/">Go Back Home</NavLink>
      </h2>

      <main>
        <div className="message">
          <Comments />
          Thank you!
        </div>
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
      </main>
    </div>
  );
};

export default Case3;
