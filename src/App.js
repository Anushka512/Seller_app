import './App.css';
import Heading from "./Heading/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/property/:id" element={<Heading />} />
      </Routes >
    </div>
  );
}

export default App;
