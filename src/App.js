import './App.css';
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Team from "./Pages/Team"

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
  );
}

export default App;
