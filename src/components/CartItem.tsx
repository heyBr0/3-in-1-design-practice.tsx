import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img src={item.imgUrl} alt="" className="cartImg" />
      <div>
        <div className="cartName">
          {item.name} {quantity > 1 && <span>x{quantity}</span>}{" "}
        </div>
        <div className="cartPrice">{formatCurrency(item.price)}</div>
        <Button className="deleteCart" onClick={() => removeFromCart(item.id)}>
          delete &times;
        </Button>
      </div>
      <div className="totalItemCart">
        {formatCurrency(item.price * quantity)}
      </div>
    </Stack>
  );
}
