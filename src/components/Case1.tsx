import "../styles/case1.css";
import $ from "jquery"; 
import Viber from "../assets/media/viber.jpeg";
import Fb from "../assets/media/faceb.jpg";
import Twitter from "../assets/media/twitter.jpg";
import { NavLink } from "react-router-dom";

const Case1 = () => {
  // Smooth page scrolling
   $(document).ready(function () {
    $("a").on("click", function (e: Event) {
      if (this.hash !== "") {
        e.preventDefault();
        let hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
 
  return (
    <div id="container-case1">
      <nav id="nav-case1">
        <NavLink to="/">
          <button></button>
        </NavLink>

        <p>
          <a href="#email">Work </a>
        </p>
      </nav>
      <main>
        <h2>Explore.Research.Reflect</h2>

        <iframe
          src="https://player.vimeo.com/video/737854276?h=da7e72ba5e&title=0&byline=0&portrait=0?&amp;background=1"
          className="vimeo-video"
          allow="autoplay; fullscreen"
           webkitallowfullscreen ="" 
           mozallowfullscreen="" 
          allowfullscreen="" 
          data-ready="true"
          frameborder="0"
          title="videoFromVimeo"
        ></iframe> 

        <h3>
          Lorem ipsum,<span>dolor sit amet</span> consectetur.
        </h3>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex
          quos perferendis provident ducimus. Quaerat qui rerum assumenda
          laborum omnis nam perspiciatis accusamus mollitia praesentium minima,
          voluptas provident ad vel.
        </h4>
        <section>
          <div>
            <ul>
              <li>Select Clients</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Cherokee Casinos</li>
              <li>Flipboard</li>
              <li>Foxwoods</li>
              <li>Glanbia Nutritionals</li>
              <li>Google</li>
              <li>Hard Rock</li>
              <li>Hibbett Sports</li>
              <li>Hilton Worldwide</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Nescafé</li>
              <li>Patreon</li>
              <li>Snickers</li>
              <li>Southern Comfort</li>
              <li>Rivers Casino</li>
              <li>The University of Alabama</li>
              <li>Twix Wind</li>
              <li>Creek Hospitality</li>
            </ul>
          </div>
        </section>
        <footer>
          <div id="contact">
            <p>Say hello</p>
            <p id="email">sayhello@gmx.com</p>
          </div>
          <div>
            <a
              href="https://www.viber.com/en/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Viber} alt="viber" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Fb} alt="facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </footer>
        <aside>
          <p>
            <NavLink to="/">All projects</NavLink>
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Case1;
