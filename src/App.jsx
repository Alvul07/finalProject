import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Shop from "./pages/Shop"
import SecondApi from "./components/SecondApi"
import Api from "./components/Api"
import ShopSectionApi from "./components/ShopSectionApi"
import ShopSectionSide from "./components/ShopSectionSide"
import Contacts from "./pages/Contacts"
import Coat from "./components/Coat"
import Trousers from "./components/Trousers"
import Jacket from "./components/Jacket"
import SweatShirts from "./components/SweatShirts"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/secondApi" element={<ShopSectionSide/>} />
          <Route path="/api" element={<Api/>}/>
          <Route path="/coat" element={<Coat/>} />
          <Route path="/trousers" element={<Trousers/>} />
          <Route path="/jacket" element={<Jacket/>} />
          <Route path="/sweatShirts" element={<SweatShirts/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
