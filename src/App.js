import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Account from "./pages/Account";
import Store from "./Redux/Store";
import NavBar from "./Cmponent/NavBar";

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
