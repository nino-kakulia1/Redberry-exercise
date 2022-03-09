import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home-page";
import PersonalInfo from "./components/personal-info";
import Skills from "./components/skills";
import Insight from "./components/insight";
import Submit from "./components/submit";
import Covid from "./components/covid";
import Finish from "./components/finish";
import Application from "./components/application";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/application" element={<Application />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
