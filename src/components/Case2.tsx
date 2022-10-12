import "../styles/case2.css";
import { NavLink } from "react-router-dom";
import storeItems from "../data/items.json";
import StoreItem from "./StoreItem";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

const Case2 = () => {
  return (
    <ShoppingCartProvider>
      <div className="case2">
        <nav id="navCase2">
          <div id="divGrid">
            <NavLink id="linkBack" to="/">
              <div id="linkBackDiv">Back Home</div>
            </NavLink>
          </div>
          <div id="cartButtonSpan">
            <button id="shoppingCartButton">Buy</button>
            <span id="spanCase2"> 3 </span>
          </div>
        </nav>
        <div id="storePage">
          <h1 id="h1Case2">Vinyl Store</h1>
          <div id="itemsCase2">
            {storeItems.map((item) => (
              <div key={item.id}>
                <StoreItem title={""} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShoppingCartProvider>
  );
};

export default Case2;
