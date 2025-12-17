import React from "react";
import { NavLink } from "react-router-dom";

function MaNavbar() {
    return (
        <nav className="navbar navbar-expand-lg">
     <a className="navbar-brand mx-3" href="#">
        <img src="/logo.jpg" className="logosushis" />
      </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
    <div className="navbar-nav fw-regular gap-4">
      <NavLink className="nav-item nav-link" to="/">Accueil</NavLink>
      <NavLink className="nav-item nav-link" to="/saveurs">Nos saveurs</NavLink>
      <NavLink className="nav-item nav-link" to="/avocatcoriandre">Avocat ou Coriandre</NavLink>
      <NavLink className= "nav-item nav-link" to="/californiaseulement"> California Saumon Avocat</NavLink>
       <NavLink className="nav-item nav-link" to="/menusinf"> {'> 13 PIÈCES'} </NavLink>
      <NavLink className="nav-item nav-link" to="/moinspluscher">Menu + / - </NavLink>
    </div>
  </div>


</nav>
    );
};
export default MaNavbar;