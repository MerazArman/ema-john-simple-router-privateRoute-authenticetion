import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Shop from './componets/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componets/Review/Review';
import OrderManage from './componets/OrderManage/OrderManage';
import NotFound from './componets/NotFound/NotFound';
import ProductDetails from './componets/ProductDetails/ProductDetails';
import Shipment from './componets/Shipment/shipment';
import Login from './componets/Login/Login';



function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
          <Shop> </Shop>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <Route path="/manage">
            <OrderManage></OrderManage>
          </Route>
          <Route path="/Shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;
