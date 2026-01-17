import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Platforms from './pages/Platforms';
import Rules from './pages/Rules';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="rules" element={<Rules />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
