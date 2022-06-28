import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removerFromCartThunk,
} from "../../store/modules/cart/thunks";
import { ContainerProducts } from "./styles";

const Product = ({ product, isRemovable = false }) => {
  const { id, name, price, img } = product;

  const dispatch = useDispatch();

  return (
    <>
      <ContainerProducts>
        <img src={img} alt={name} id="img" />
        <div>
          <h3>{name}</h3>
          <h4>R$ {price}</h4>
          {isRemovable ? (
            <button onClick={() => dispatch(removerFromCartThunk(id))}>
              <FiTrash2 /> Remove
            </button>
          ) : (
            <button onClick={() => dispatch(addToCartThunk(product))}>
              <FiShoppingCart /> Adiciona
            </button>
          )}
        </div>
      </ContainerProducts>
    </>
  );
};
export default Product;
