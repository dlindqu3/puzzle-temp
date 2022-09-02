import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SixteenBase from "./components/SixteenBase";
import About from "./pages/About"; 

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<SixteenBase />}/>
          <Route path="/about" element={<About />}/> 
        </Routes>
      </>
      </BrowserRouter>
    </div>
  );
}

export default App;
