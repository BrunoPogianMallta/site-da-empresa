import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Importe o componente Layout
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Quote from './components/Quote';
import Technologies from './components/Tecnologies';
import Blog from './components/News';


const App = () => {
  return (
    <Router>
      <Layout> {/* Use o componente Layout como o contêiner principal */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Home />
        <Technologies  />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;
