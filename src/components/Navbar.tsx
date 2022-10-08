import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleScroll = () => {
    let linkCase1 = document.querySelector("#linkCase1") as HTMLElement;
    linkCase1.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScroll2 = () => {
    let linkCase2 = document.querySelector("#linkCase2") as HTMLElement;
    linkCase2.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleScroll3 = () => {
    let linkCase3 = document.querySelector("#linkCase3") as HTMLElement;
    linkCase3.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <div className="innerLink" id="innerLinkCase1" onClick={handleScroll}>
          Case 1
        </div>
        <div className="innerLink" id="innerLinkCase2" onClick={handleScroll2}>
          Case 2
        </div>
        <div className="innerLink" id="innerLinkCase3" onClick={handleScroll3}>
          Case 3
        </div>
      </div>
    </div>
  );
};

export default Navbar;
