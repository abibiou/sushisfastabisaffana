import React from "react";
import { NavLink } from "react-router-dom";

function MonFooter() {
    return (
      <footer className="py-3 mt-5"
      style={{ backgroundColor: "#F0CECF", color: "#D89293"}}>
        <div className="container text-center">
          <p className="mb-1">© sushiFast | Tous droits réservés.</p>
          <div className="d-flex flex-wrap justify-content-center gap-4 py-2">
          <NavLink to="/" className="text-decoration-none" style={{ color: "#D89293" }}>
            Accueil
          </NavLink>

          <NavLink to="/saveurs" className="text-decoration-none" style={{ color: "#D89293" }}>
            Nos saveurs
          </NavLink>

          <NavLink to="/avocatcoriandre" className="text-decoration-none" style={{ color: "#D89293" }}>
            Avocat ou coriandre
          </NavLink>

          <NavLink to="/californiaseulement" className="text-decoration-none" style={{ color: "#D89293" }}>
            California Saumon Avocat
          </NavLink>

          <NavLink to="/menusinf" className="text-decoration-none" style={{ color: "#D89293" }}>
            Moins de 13 Pièces
          </NavLink>

          <NavLink to="/moinspluscher" className="text-decoration-none" style={{ color: "#D89293" }}>
            Menu + / -
          </NavLink>
          </div>
        </div>
      </footer>
    );
  }

  export default MonFooter;
