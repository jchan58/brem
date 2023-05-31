import './App.css';
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
  );
}

export default App;
