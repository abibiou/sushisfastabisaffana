import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function Accueil() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/boxes.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (

    <div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src="/logosushisfastabisaff.jpg" className='img-fluid' />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-4 d-flex align-items-center justify-content-start">
            <div>
              <p className="fw-bold mb-1 fs-5" style={{ color: "#D89293" }}>10:00 - 22:00</p>
              <p style={{ color: "#D89293" }}>17 Rue Jablinot<br />77100 Meaux, France</p>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-4 d-flex align-items-center justify-content-end text-end">
            <div>
              <p className="mb-1" style={{ color: "#D89293" }}>+33 6 01 23 45 67</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bandeausushisfast mt-4 mb-5">
        <div className="scroll-text">
          <span className='fs-3'>SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST</span>
        </div>
      </div>

      <h1 className="mt-3 fw-bold text-center" style={{ color: "#D89293" }}>NOS MENUS</h1>
      <div className="text-center">
        <img src="/iconeflechedubas.jpg" className="img-fluid" style={{ maxWidth: "40px" }} />
      </div>
      <div className="container-fluid px-5">
        <div className="row mt-4">
          {menus.map(m => (
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

export default Accueil;