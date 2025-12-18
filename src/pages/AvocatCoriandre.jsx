import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function AvocatCoriandre() {
  const [produits, setProduits] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/boxes.json")
      .then((res) => res.json())
      .then((data) => setProduits(data));
  }, []);

  const avoCor = produits.filter(menu =>
    menu.saveurs.includes("avocat") || menu.saveurs.includes("coriandre")
  );

  return (

    <div>
      <div className="container-fluid px-5 mt-5">
        <div className="row px-5 align-items-center">
          <div className="col-md-6">
            <h1 className="mt-5 fw-bold" style={{ color: "#D89293", fontSize: "70px", lineHeight: "1.00em" }}>AVOCAT OU<br /> CORIANDE</h1>
            <h3 className="mt-3" style={{ color: "#D89293" }}>sur cette page sont listés tous les menus contenant comme saveurs de l’avocat ou de la coriandre.</h3>
          </div>
          <div className="col-md-6">
            <div className="text-center mt-3">
              <img src="/menuavocatoucoriande.jpg" className="img-fluid" style={{ maxWidth: "100%" }} />
            </div>
          </div>
        </div>
      </div>
        <div className="bandeausushisfast mt-5 mb-5">
        <div className="scroll-text">
          <span className='fs-3'>SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST</span>
        </div>
      </div>
      <h1 className="mt-5 fw-bold text-center" style={{ color: "#D89293" }}>AVOCAT OU CORIANDE</h1>
      <div className="text-center">
        <img src="/iconeflechedubas.jpg" className="img-fluid" style={{ maxWidth: "40px" }} />
      </div>
       <div className="container-fluid px-5">
      <div className="row mt-4">
        {avoCor.map(m => (
          <div className="col-12 col-sm-6 col-md-3" key={m.id}>
            <div className="card border-0 rounded-0 position-relative p-0 mt-5" style={{ backgroundColor: "#F4F1E8", cursor: "pointer" }}
               onClick={() => navigate(`/menu/${m.id}`)}>
              <div style={{ backgroundColor: "#F0CECF" }}>
                <div className="position-absolute top-0 start-0 ms-3 mt-3 fw-regular fs-4" style={{ color: "#a96869ff" }}>
                  {m.pieces} PIÈCES
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                  <img src={`/${m.image}.jpg`} alt={m.nom} className="img-fluid mt-3 mb-3 px-3" />
                </div>
                <div className="d-flex justify-content-end">
                  <p className="text-end me-3 mt-3 fs-4 fw-regular" style={{ color: "#a96869ff" }}>{m.prix} €</p>
                </div>
              </div>
              <div className="mt-4 p-3 text-center text-white fs-5 fw-regular" style={{ backgroundColor: "#D89293" }}>{m.nom}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>


    </div>
  );
}

export default AvocatCoriandre;