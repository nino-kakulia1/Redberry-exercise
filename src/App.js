import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home-page";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
import Covid from "./components/covid";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills" element={<Covid />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
