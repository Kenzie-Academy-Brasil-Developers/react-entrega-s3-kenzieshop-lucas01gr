import Cart from "../cart";
import { FiShoppingCart } from "react-icons/fi";
import { ContainerHeader, ContainerProductAndCart, DivProduct } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function CartShop() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  const cart = useSelector(({ cart }) => cart);

  let total = cart.reduce((valorAnterior, atualValue) => {
    return valorAnterior + atualValue.price;
  }, 0);

  console.log(total);
  return (
    <>
      <ContainerHeader>
        <div>
          <h3>
            Kenzie <span>Shop</span>
          </h3>
        </div>
        <div>
          <FiShoppingCart /> Carrinho <span></span>
        </div>
      </ContainerHeader>
      <ContainerProductAndCart>
        <DivProduct>
          <Cart />
        </DivProduct>
        <div id="cart">
          <div>
            <h3>Resumo de pedidos</h3>
            <div id="total">
              <h4>Total</h4>
              <p>R$ {total}</p>
            </div>
            <button onClick={() => handleNavigation("/")}>
              FINALIZAR PEDIDO
            </button>
          </div>
        </div>
      </ContainerProductAndCart>
    </>
  );
}
export default CartShop;
