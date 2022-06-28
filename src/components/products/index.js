import Product from "../product";
import { useSelector } from "react-redux/es/exports";
import { ContainerProduct } from "./styles";

const Products = () => {
  const products = useSelector(({ products }) => products);
  return (
    <ContainerProduct>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ContainerProduct>
  );
};

export default Products;
