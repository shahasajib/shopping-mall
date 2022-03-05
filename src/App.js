import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Switch, Route} from 'react-router-dom'
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Login from './Components/buttons/Login';
import Signup from './Components/buttons/Signup';
import CheckOut from './Components/CheckOut';
import Contract from './Components/Contract';
import About from './Components/About';




function App() {
  return (
  <>
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/products/:id" component={Product}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Signup}/>
    <Route exact path="/checkout" component={CheckOut}/>
    <Route exact path="/contract" component={Contract}/>
    <Route exact path="/about" component={About}/>
  </Switch>
  
 
  </>
       
);
}

export default App;
