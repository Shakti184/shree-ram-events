import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// Import the Layout "Frame"
import Layout from './components/layout/Layout';

// Import Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Wrap everything inside Layout so Navbar & Footer appear on every page */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;