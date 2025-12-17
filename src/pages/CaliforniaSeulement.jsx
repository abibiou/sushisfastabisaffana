import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function CaliforniaSeulement() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/boxes.json")
      .then((res) => res.json())
      .then((data) => setMenus(data))
  }, []);

  return (
    <div>
        <div className="container-fluid px-5 mt-5">
                <div className="row align-items-center px-5">
                    <div className="col-md-6">
                        <h1 className="mt-5 fw-bold" style={{ color: "#D89293", fontSize: "70px", lineHeight: "1.00em" }}>CALIFORNIA SAUMON AVOCAT</h1>
                        <h2 className="mt-3" style={{ color: "#D89293" }}>Voici la liste des menus ne contenant l'aliment : "California Saumon Avocat".</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center mt-3">
                            <img src="/californiasaumonavocat.jpg" className="img-fluid" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
              <div className="bandeausushisfast mt-5 mb-5">
        <div className="scroll-text">
          <span className='fs-3'>SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST</span>
        </div>
      </div>
              <h1 className="mt-3 fw-bold text-center mt-5" style={{ color: "#D89293" }}>CALIFORNIA SAUMON AVOCAT</h1>
            <div className="text-center mt-3">
                <img src="/iconeflechedubas.jpg" className="img-fluid" style={{ maxWidth: "40px" }} />
            </div>
      <div className="row">
        {menus
          .filter(m =>
            m.aliments?.map(a => a.nom).includes("California Saumon Avocat")
          )
          .map(m => (
            <div className="col-12 col-sm-6 col-md-4 px-5" key={m.id}>
              <div className="card border-0 rounded-0 position-relative p-0 mt-5 px-5" style={{ backgroundColor: "#F4F1E8" , cursor: "pointer" }}
                onClick={() => navigate(`/menu/${m.id}`)}>
                
                <div style={{ backgroundColor: "#F0CECF" }}>
                  <div className="row">
                    <div className="col-6">
                      <div style={{ backgroundColor: "#F0CECF" }} className="position-relative">
                        <div
                          className="position-absolute top-0 start-0 ms-3 mt-3 fw-regular fs-4"
                          style={{ color: "#a96869ff" }}
                        >
                          {m.pieces} PIÈCES
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div style={{ backgroundColor: "#F0CECF" }} className="position-relative">
                        <div
                          className="position-absolute top-0 end-0 mx-3 mt-3 fw-regular fs-4"
                          style={{ color: "#a96869ff" }}
                        >
                          {m.prix} €
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-5">
                    <img src={`/${m.image}.jpg`} alt={m.nom} className="img-fluid mt-3 mb-3 px-3" />
                  </div>
                  <div className="card-body">
                    <p className="card-text" style={{ color: "#a96869ff" }}>{m.saveurs?.join(", ")}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 text-center text-white fs-5 fw-regular" style={{ backgroundColor: "#D89293" }}>{m.nom}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CaliforniaSeulement;
