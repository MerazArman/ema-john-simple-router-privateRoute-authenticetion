import React, { createContext, useState } from 'react';
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
import Shipment from './componets/Shipment/Shipment';
import Login from './componets/Login/Login';
import PrivateRout from './componets/PrivateRout/PrivateRout';

export const UserContext = createContext()



function App() {
  const [loggedUser,setLoggedUer] = useState({})
  return (
    <UserContext.Provider value= {[loggedUser , setLoggedUer]} >
      <h3> Email :{loggedUser.email} </h3>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
          <Shop> </Shop>
          </Route>
          <Route path="/review">
          <Review></Review>
          </Route>
          <PrivateRout path="/manage">
            <OrderManage></OrderManage>
          </PrivateRout>
          <PrivateRout path="/Shipment">
            <Shipment></Shipment>
          </PrivateRout>
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
     
     
    </UserContext.Provider>
  );
}

export default App;
