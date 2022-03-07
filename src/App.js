import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home-page";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
import Insight from "./components/insight";
import Covid from "./components/covid";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/covid" element={<Insight />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
