import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Shop from "./pages/Shop"
import Api from "./components/Api/Api"
import ShopSectionSide from "./components/Shop/ShopSectionSide"
import Contacts from "./pages/Contacts"
import Coat from "./components/Catalogue/Coat"
import Trousers from "./components/Catalogue/Trousers"
import Jacket from "./components/Catalogue/Jacket"
import SweatShirts from "./components/Catalogue/SweatShirts"
import ShopSectionSide2 from "./components/Shop/ShopSectionSide2"
import ShopSectionSide3 from "./components/Shop/ShopSectionSide3"
import SweatShirts2 from "./components/Catalogue/SweatShirts2"
import BagAdd from "./components/BagAdd/BagAdd"
import Bag from "./components/Bag/Bag"
import { CartProvider } from "./components/Bag/ProductAdd"
import ErrorBoundary from "./components/ErrorBoundary"
import ProductList from "./components/Bag/ProductList"
import OrderTake from "./components/Order/OrderTake"
import OrderSuccess from "./components/Order/OrderSuccess"

function App() {

  return (
    <>
      <ErrorBoundary>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/secondApi" element={<ShopSectionSide />} />
              <Route path="/api" element={<Api />} />
              <Route path="/coat" element={<Coat />} />
              <Route path="/trousers" element={<Trousers />} />
              <Route path="/jacket" element={<Jacket />} />
              <Route path="/sweatShirts" element={<SweatShirts />} />
              <Route path="/thirdApi" element={<ShopSectionSide2 />} />
              <Route path="/fourthApi" element={<ShopSectionSide3 />} />
              <Route path="/sweatShirts2" element={<SweatShirts2 />} />
              <Route path="/bagAdd/:title" element={<BagAdd />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/cart" element={<ProductList />} />
              <Route path="/order" element={<OrderTake />} />
              <Route path="/orderSuccess" element={<OrderSuccess />} />
            </Routes>
          </Router>
        </CartProvider>
      </ErrorBoundary>
    </>
  )
}

export default App
