import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BlogPage from "./Pages/BlogPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/shop/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
