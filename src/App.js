import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import ADOPT from "./ADOPT"
import ReadMore from './ReadMore';


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/About" element ={<About />} />
        <Route path="/Contact" element ={<Contact />} />
        <Route path="/FAQ" element ={<FAQ/>} />
        <Route path="/ADOPT" element ={<ADOPT/>} />
        <Route path="/ReadMore" element ={<ReadMore/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
