import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Waterproofing from "./Components/Waterproofing/Waterproofing";
import Footer from "./Components/Footer/Footer";
import Newconstruction from "./Components/NewConstruction/Newconstruction";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ScrollToTop from "./Components/ScrollToTop";
import RepairConstruction from "./Components/RepairConstruction/RepairConstruction";


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
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
