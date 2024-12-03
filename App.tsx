import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar />

        {/* Main content area */}
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        {/* Footer (optional) */}
        <footer className="text-center mt-5 py-4 bg-dark text-light">
          <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
