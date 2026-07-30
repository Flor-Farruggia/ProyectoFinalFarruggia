import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar={false} closeOnClick pauseOnHover draggable toastClassName="custom-toast" progressClassName="custom-progress"/>
      <Navbar />

      <Routes>
        <Route path="/" element={<> <Header /> <ItemListContainer /></>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route  path="/item/:itemId"  element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;