import "../styles/style.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="content">
          <h2>
            <NavLink to="/case1">[ Case 1 ]</NavLink>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>
          <aside>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt
            aperiam iste saepe voluptate, eum atque molestiae quo, ipsa possimus
            quaerat sequi expedita quod consectetur reprehenderit velit
            accusantium, delectus harum.
          </aside>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>
            <NavLink to="/case2">[ Case 2 ]</NavLink>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>
          <aside>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sunt
            aperiam iste saepe voluptate, eum atque molestiae quo, ipsa possimus
            quaerat sequi expedita quod consectetur reprehenderit velit
            accusantium, delectus harum.
          </aside>
        </div>
      </div>

      <div className="section">
        {" "}
        <div className="content">
          <h2>
            <NavLink to="/case3">[ Case 3 ]</NavLink>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
            facilis quos praesentium assumenda fugit ipsum soluta ducimus
            voluptas nobis sint cumque omnis tenetur, odio cum fuga quia
            expedita quod?
          </p>
          <aside>
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
