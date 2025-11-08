import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Waterproofing from "./Components/Waterproofing/Waterproofing";
import Footer from "./Components/Footer/Footer";
import Newconstruction from "./Components/NewConstruction/Newconstruction";


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
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newconstruction" element={<Newconstruction />} />
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
