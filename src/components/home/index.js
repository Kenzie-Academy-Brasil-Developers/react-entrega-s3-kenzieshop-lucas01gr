import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Products from "../products";
import { ContainerHeader, ContainerProduct } from "./styles";
import { useSelector } from "react-redux";

function Home() {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  const cart = useSelector(({ cart }) => cart);
  return (
    <>
      <ContainerHeader>
        <div>
          <h3>Kenzie <span>Shop</span> </h3>
        </div>
        <buttom onClick={() => handleNavigation("/CartShop")}>
        <span>{cart.length}</span> <FiShoppingCart /> Carrinho 
        </buttom>
      </ContainerHeader>
      <ContainerProduct>
        <Products />
      </ContainerProduct>
    </>
  );
}
export default Home;
