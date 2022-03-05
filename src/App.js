import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/hero-section";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<div>Persoal info</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
