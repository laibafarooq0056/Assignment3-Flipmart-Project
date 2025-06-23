import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

function App() {
   return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home Page</Link> |{" "}
        <Link to="/Page2">About Us</Link> |{" "}
        <Link to="/Page3">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;