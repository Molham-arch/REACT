import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Design from './pages/Design';
import Minecraft from './pages/Minecraft';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/minecraft" element={<Minecraft />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
