import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Shop from "./pages/Shop"
import Api from "./components/Api"
import ShopSectionSide from "./components/ShopSectionSide"
import Contacts from "./pages/Contacts"
import Coat from "./components/Coat"
import Trousers from "./components/Trousers"
import Jacket from "./components/Jacket"
import SweatShirts from "./components/SweatShirts"
import ShopSectionSide2 from "./components/ShopSectionSide2"
import ShopSectionSide3 from "./components/ShopSectionSide3"
import SweatShirts2 from "./components/SweatShirts2"
import BagAdd from "./components/BagAdd"
import { ApiProvider } from "./components/ApiProvider"

function App() {

  return (
    <>
    <ApiProvider></ApiProvider>
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
          <Route path="/thirdApi" element={<ShopSectionSide2/>} />
          <Route path="/fourthApi" element={<ShopSectionSide3/>} />
          <Route path="/sweatShirts2" element={<SweatShirts2/>} />
          <Route path="/bagAdd/:title" element={<BagAdd/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
