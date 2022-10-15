import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  title: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, title, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div>
      <Card>
        <Card.Img
          className="storeImg"
          variant="top"
          src={imgUrl}
          width="200px"
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>
            <p className="itemP">{name}</p>
            <p className="itemP">{title}</p>
            <p className="itemP">{formatCurrency(price)}</p>
          </Card.Title>
          <div>
            {quantity === 0 ? (
              <Button
                onClick={() => increaseCartQuantity(id)}
                className="quantity"
              >
                {" "}
                + Add To Cart
              </Button>
            ) : (
              <div className="dFlex">
                <div className="dGrid">
                  <div>
                    <Button
                      className="plusMinus"
                      onClick={() => decreaseCartQuantity(id)}
                    >
                      -
                    </Button>
                  </div>
                  <div>
                    <span>{quantity}</span> in cart
                  </div>
                  <div>
                    <Button
                      className="plusMinus"
                      onClick={() => increaseCartQuantity(id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="dFlex">
                  <Button
                    className="itemRemove"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StoreItem;
