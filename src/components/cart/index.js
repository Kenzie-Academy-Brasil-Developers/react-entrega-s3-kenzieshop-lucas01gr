import { useSelector } from "react-redux";
import Product from "../product";

const Cart = () => {
  const cart = useSelector(({ cart }) => cart);

  return (
    <>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </>
  );
};

export default Cart;
