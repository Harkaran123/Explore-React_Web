import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/contact" Component={Contact} />
            <Route path="/services" Component={Services} />
            <Route path="/about" Component={About} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
