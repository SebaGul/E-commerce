import Home from "./pages/Home";
import Cart from  "./pages/Cart";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/myAccount" exact component={MyAccount} />
        <Route path="/productList" exact component={ProductList} />
        <Route path="/register" exact component={Register} />
        <Route path="*" exact component={PageNotFound}/>

      </Switch>
    </Router>
  );
};

export default App;