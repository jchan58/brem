import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer.js';
import NavBar from './Components/NavBar.js';
import HomePage from '../src/Pages/HomePage.js';
import Discover from './Pages/discover.js';
import Team from './Pages/Team.js';
import Current from './Pages/current.js';
import Database from './Pages/database.js';
import Alumni2 from './Pages/alumni2.js';
import Alumni3 from './Pages/alumni3.js';
import Alumni4 from './Pages/alumni4.js';
import Alumni5 from './Pages/alumni5.js';
import Alumni6 from './Pages/alumni6.js';
import Alumni7 from './Pages/alumni7.js';
import Contact from './Pages/contact.js';
import Modules from './Pages/modules.js';

import ModuleEdit from './Pages/ModuleEdit.js';
import UnitPage from './Pages/UnitPage.js'
import ModulePage from "./Pages/modulePage.js";

function App() {
  return (
    <>
      <Theme>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/discover" element={<Discover/>} />
          <Route path="/team" element={<Team/>} /> 
          <Route path="/current" element={<Current/>} /> 
          <Route path="/database" element={<Database/>} /> 
          <Route path="/alumni2" element={<Alumni2/>} /> 
          <Route path="/alumni3" element={<Alumni3/>} /> 
          <Route path="/alumni4" element={<Alumni4/>} /> 
          <Route path="/alumni5" element={<Alumni5/>} />
          <Route path="/alumni6" element={<Alumni6/>} />
          <Route path="/alumni7" element={<Alumni7/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/modules" element={<Modules/>} />
          <Route path="/editmodule" element={<ModuleEdit/>} />
          <Route path = "/unitpage" element={<UnitPage/>} />
          <Route path = "/modulepage" element={<ModulePage/>} />
        </Routes>
        <Footer/>
      </Theme>
    </>
  );
}

export default App;
