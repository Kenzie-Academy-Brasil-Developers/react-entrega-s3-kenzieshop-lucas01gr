import { Switch, Route } from "react-router-dom";
import CartShop from "../components/cartshop";
import Home from "../components/home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/CartShop">
        <CartShop />
      </Route>
    </Switch>
  );
}
export default Routes;
