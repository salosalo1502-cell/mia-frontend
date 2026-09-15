import './App.css';

import Header from './header/header.jsx';
import About from './about/about.jsx';
import MensCollection from './mens/mensCollection.jsx';
import Womans from './womans/womans.jsx';
import Custom from './custom/custom.jsx';
import Company from './company/company.jsx';
import Contaqt from './contaqt/contaqt.jsx';

import MensCategory from './mens/mensCategory.jsx';
import Suits from './mens/suits.jsx';
import products from './products/products.jsx';
import Prooductos from "./mens/produqtPage.jsx";
import CheckOut from './Checkout/checkOut.jsx';


import Cart from './card/cart.jsx';
import WomansCategory from './womans/WomansCategory.jsx';
import TailoredBlazer from './womans/TailoredBlazer.jsx';
import UniversalWomenProduct from './womans/UniversalWomenProduct.jsx';

import { Routes, Route } from 'react-router-dom';




function App() {

  return (

    <div>

      <Routes>

        <Route
          path="/"
          element={<Header />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/mens"
          element={<MensCollection />}
        />

        <Route
          path="/womans"
          element={<Womans />}
        />

        <Route
          path="/custom"
          element={<Custom />}
        />

        <Route
          path="/company"
          element={<Company />}
        />

        <Route
          path="/contaqt"
          element={<Contaqt />}
        />

        {/* MEN'S CATEGORY */}

        <Route
          path="/mens/:category"
          element={<MensCategory />}
        />

        <Route
          path="/mens/suits"
          element={<Suits />}
        />

        <Route
          path="/mens/product_test"
          element={<Suits />}
        />

        {/* MEN'S PRODUCT */}

        <Route
          path="/mens/:category/:productName"
          element={<Prooductos />}
        />


        {/* WOMEN'S PRODUCT */}

        <Route
          path="/womans/tailored"
          element={<TailoredBlazer />}
        />

        <Route
          path="/womans/:category/:productName"
          element={<UniversalWomenProduct />}
        />

        {/* WOMEN'S CATEGORY */}

        <Route
          path="/womans/:category"
          element={<WomansCategory />}
        />


        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={<CheckOut />}
        />

      </Routes>


      <Cart />

    </div>

  );

}

export default App;

