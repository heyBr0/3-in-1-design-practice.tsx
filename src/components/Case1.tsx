import "../styles/case1.css";
import Viber from "../assets/media/viber.jpeg";
import Fb from "../assets/media/faceb.jpg";
import Twitter from "../assets/media/twitter.jpg";
import { NavLink } from "react-router-dom";

const Case1 = () => {

  const handleScroll = () => {
    let element = document.querySelector("#pNavBottom") as HTMLElement;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="container-case1">
      <div id="nav-case1">
        <NavLink to="/">
          <button></button>
        </NavLink>

        <p>
          <a onClick={handleScroll}>Work </a>
        </p>
      </div>
      <main>
        <h2>Explore.Research.Reflect</h2>

        <iframe
          src="https://player.vimeo.com/video/737854276?h=da7e72ba5e&title=0&byline=0&portrait=0?&amp;background=1"
          className="vimeo-video"
          allow="autoplay; fullscreen"
         /*  allowFullScreen="" */
          data-ready="true"
          frameBorder="0"
          title="videoFromVimeo"
        ></iframe>

        <h3>
          Lorem ipsum,<span>dolor sit amet</span> consectetur.
        </h3>
        <h4>
        Extraplanetary radio telescope kindling the energy hidden in matter brain is the seed of intelligence paroxysm of global encyclopaedia galactica. The sky calls to us tendrils of gossamer clouds extraordinary claims require extraordinary evidence with pretty stories for which there's little good evidence invent the universe Euclid. Euclid rings of Saturn extraordinary claims require extraordinary evidence the only home we've ever known something incredible is waiting to be known how far away and billions of miles to go... 
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
          <p id="pNavBottom">
            <NavLink to="/">All projects</NavLink>
          </p>
        </aside>
      </main>
    </div>
  );
};

export default Case1;
