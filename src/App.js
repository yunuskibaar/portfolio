
import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<MainPage />} />
          <Route path="/projeler" element={<Projects />} />
          <Route path="/hakkımda" element={<About/>} />
          <Route path="/Resume" element={<Resume/>} >
          </Route>
      </Routes>
    </div>
    </Router> 
  );
}

export default App;
