import Navbar from "./components/header/navbar/Navbar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Icon from "./components/header/Icons/Icon";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Blog from "./pages/blog/Blog";
import Admin from "./pages/admin/Admin";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="App">
    
    <Router>
        <Icon />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
