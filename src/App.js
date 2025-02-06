import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Castandcrew from './Castandcrew';
import Header from './Header';
import Home from './Home';
import Women from './Women';
import Men from './Men';
import Newarrival from './Newarrival';
import Navbar1 from './Navbar';
import Container5 from './Container5';
import Footer from './Footer';
import BoysandGirls from './boysandgirls';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar1></Navbar1>
       
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/path1" element={<Home />} /> */}
          
          <Route path="/new-arrivals" element={<Newarrival />} />
          <Route path="/new-arrivals/path2" element={<Page1 />} />
          <Route path="/new-arrivals/path2/path3" element={<Page2 />} />
          <Route path="/new-arrivals/path2/path3/path4" element={<Page3 />} />
          <Route path="/cast-and-crew" element={<Castandcrew />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/boysandgirls" element={<BoysandGirls />} />


        </Routes>

        <Container5></Container5>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
