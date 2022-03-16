import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Switch>
        <Route path="/:id_producto">
            <Product />
        </Route>
        <Route path="/">
            <ProductForm />
        </Route>
    </Switch>
    
  );
}

export default App;
