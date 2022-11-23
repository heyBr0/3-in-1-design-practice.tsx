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
            Literally mixtape taxidermy authentic butcher mumblecore VHS fixie.
            JOMO dreamcatcher ethical woke, lyft fashion axe chambray waistcoat
            fit hot chicken tousled. 90's selvage schlitz umami trust fund, swag.
          </p>

          <aside id="aside1">
            Kitsch actually organic bodega boys adaptogen. Fit paleo affogato,
            cloud bread meggings flexitarian jianbing viral mlkshk. XOXO pok pok neutra, Brooklyn 
            shaman. Sustainable drinking vinegar hella selvage 90's unicorn.
          </aside>
        </div>
      </div>
      <div className="section" id="linkCase2">
        <div className="content">
          <h2>
            <NavLink to="/case2">[ Case 2 ]</NavLink>
          </h2>
          <p id="p2">
            You probably haven't heard of them kombucha fam bespoke flannel
            leggings chartreuse vape tofu green juice beard. Kickstarter williamsburg iPhone wolf banh mi coloring book cloud
            bread edison bulb slow-carb pug mukbang snackwave.
          </p>
          <aside id="aside2">
            Slow-carb cred stumptown tote bag four dollar toast fam yes plz
            mukbang. Lyft scenester blog roof party pour-over dreamcatcher
            letterpress. Vibecession scenester blog, chartreuse microdosing
            irony portland YOLO live-edge.
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
            Pitchfork taxidermy unicorn umami, austin you probably haven't heard
            of them intelligentsia yes plz portland pickled same pug tonx.
            Crucifix ugh ramps butcher, flannel tattooed artisan
            tumeric venmo seitan keffiyeh schlitz synth thundercats coloring
            book.
          </p>
          <aside id="aside3">
            Tilde kombucha vape sustainable, fanny pack irony keffiyeh jean
            shorts scenester lomo. Meggings pop-up XOXO roof party
            hella, dreamcatcher biodiesel cold-pressed mukbang blog gatekeep yes plz irony wayfarers
            photo booth.
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
