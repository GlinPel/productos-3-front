import Product from "./components/Product";
import ProductForm from "./components/ProductForm";
import {
  Switch,
  Route,
} from "react-router-dom";
import EditForm from "./components/EditForm";

function App() {
  return (
    <Switch>
        <Route path="/:id_producto/edit">
            <EditForm />
        </Route>
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
