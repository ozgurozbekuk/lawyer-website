import Navbar from "./components/header/navbar/Navbar";
import Info from "./components/header/info/Info";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Icon from "./components/header/Icons/Icon";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";



function App() {
  return (
    <div className="App">
      <Icon/>
      <Navbar/>
      <Info/>
      <About/>
      <Services/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
