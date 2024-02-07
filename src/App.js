import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Header/>

      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
        
      </Routes>
{/* 
      <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/about" element={<About/>} />
   <Route path="/contact" element={<Contact />} />
   </Routes> */}
   
    </div>
  );
}

export default App;
