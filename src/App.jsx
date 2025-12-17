import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MaNavbar from './components/Header';
import MonFooter from './components/Footer';
import Accueil from './pages/Accueil';
import AvocatCoriandre from './pages/AvocatCoriandre';
import MoinsPlusCher from './pages/MoinsPlusCher';
import MenuInf from './pages/MenusInf';
import Saveurs from './pages/Saveurs';
import CaliforniaSeulement from './pages/CaliforniaSeulement';
import MenuDetail from './pages/MenuDetail';
import './index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <MaNavbar />
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/avocatcoriandre" element={<AvocatCoriandre />} />
          <Route path="/californiaseulement" element={<CaliforniaSeulement />} />
          <Route path="/menusinf" element={<MenuInf />} />
          <Route path="/moinspluscher" element={<MoinsPlusCher />} />
          <Route path="/saveurs" element={<Saveurs />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
        </Routes>
      </div>
      <MonFooter />
    </>
  )
}

export default App
