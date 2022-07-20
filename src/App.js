import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Details from "./Details";


function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" exact element={<Contact />}/>
          <Route path="/contact/:id" exact element={<Details />}/>
        
        </Routes>
   
    </div>
  );
}

export default App;
