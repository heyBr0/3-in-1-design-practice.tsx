import "../styles/style.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <div className="section" id="linkCase1">
        <Navbar />
        <div className="content">
          <h2>
            <NavLink to="/case1">[ Case 1 ]</NavLink>
          </h2>

          <p id="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>

          <aside id="aside1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt
            aperiam iste saepe voluptate, eum atque molestiae quo, ipsa possimus
            quaerat sequi expedita quod consectetur reprehenderit velit
            accusantium, delectus harum.
          </aside>
        </div>
      </div>
      <div className="section" id="linkCase2">
        <div className="content">
          <h2>
            <NavLink to="/case2">[ Case 2 ]</NavLink>
          </h2>
          <p id="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>
          <aside id="aside2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt
            aperiam iste saepe voluptate, eum atque molestiae quo, ipsa possimus
            quaerat sequi expedita quod consectetur reprehenderit velit
            accusantium, delectus harum.
          </aside>
        </div>
      </div>

      <div className="section" id="linkCase3">
        {" "}
        <div className="content">
          <h2>
            <NavLink to="/case3">[ Case 3 ]</NavLink>
          </h2>
          <p id="p3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>
          <aside id="aside3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt
            aperiam iste saepe voluptate, eum atque molestiae quo, ipsa possimus
            quaerat sequi expedita quod consectetur reprehenderit velit
            accusantium, delectus harum.
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
