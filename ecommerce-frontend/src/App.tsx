import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </Router>
  )
}

export default App
