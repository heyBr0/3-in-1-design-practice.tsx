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
          variant="top"
          src={imgUrl}
          width="200px"
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>
            <p>{id}</p>
            <p>{name}</p>
            <p>{title}</p>
            <p>{formatCurrency(price)}</p>
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
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>

                <div className="dFlex">
                  <Button onClick={() => removeFromCart(id)}>Remove</Button>
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
