import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Waterproofing from "./Components/Waterproofing/Waterproofing";
import Footer from "./Components/Footer/Footer";
import Newconstruction from "./Components/NewConstruction/Newconstruction";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ScrollToTop from "./Components/ScrollToTop";
import RepairConstruction from "./Components/RepairConstruction/RepairConstruction";
import Remover from "./Components/Remover/Remover";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contactus from "./Components/Contactus/Contactus";


function Home() {
  return (
    <>
      <Header />
     <Waterproofing/>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newconstruction" element={<Newconstruction />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/repair" element={<RepairConstruction />} />
        <Route path="/remover" element={<Remover/>} />
         <Route path="/about-us" element={<AboutUs />} />
         <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
