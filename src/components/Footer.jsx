import React from "react";

function MonFooter() {
    return (
      <footer className="py-3 mt-5"
      style={{ backgroundColor: "#F0CECF", color: "#D89293"}}>
        <div className="container text-center">
          <p className="mb-1">© sushiFast | Tous droits réservés.</p>
          <div>
            <a href="Accueil" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>Accueil</a>
            <a href="Saveurs" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>Nos saveurs</a>
            <a href="" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>Avocat ou coriandre</a>
            <a href="#" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>California Saumon Avocat</a>
            <a href="#" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>Menu pièces inf à 13</a>
            <a href="#" className="me-3 text-decoration-none" style={{ color: "#D89293"}}>Menu cher ou non</a>
          </div>
        </div>
      </footer>
    );
  }

  export default MonFooter;