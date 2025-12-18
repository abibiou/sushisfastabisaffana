import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function MenusInf() {
    const [produits, setProduits] = useState([]);
      const navigate = useNavigate();
    useEffect(() => {
        fetch("/boxes.json")
            .then((res) => res.json())
            .then((data) => setProduits(data));
    }, []);

    const inferieur = produits.filter(menu =>
        menu.pieces < 13
    );
   const prixTotal = inferieur.reduce((acc, menu) => acc + menu.prix, 0);
    return (
        <div>
            <div className="container-fluid px-5 mt-5">
                <div className="row align-items-center px-5">
                    <div className="col-md-6">
                        
                        <h1 className="mt-5 fw-bold" style={{ color: "#D89293", fontSize: "70px", lineHeight: "1.00em" }}>MENU PIÈCE<br/> INFÉRIEUR À 13</h1>
                        <h6 className="mt-4 fw-bold" style={{ color: "#D89293", fontSize: "32px"}}>Prix total des menus : <strong>{prixTotal} €</strong></h6>
                        <h2 className="mt-3" style={{ color: "#D89293" }}>sur cette page sont listés tous les menus contenant moins de 13 pièces</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center mt-3">
                            <img src="/menuinf13.jpg" className="img-fluid" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
              <div className="bandeausushisfast mt-5 mb-5">
        <div className="scroll-text">
          <span className='fs-3'>SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST ★ SUSHIFAST</span>
        </div>
      </div>
            <h1 className="mt-5 fw-bold text-center" style={{ color: "#D89293" }}>MENU INFÉRIEUR À 13</h1>
            <div className="text-center">
                <img src="/iconeflechedubas.jpg" className="img-fluid" style={{ maxWidth: "40px" }} />
            </div>
            <div className="container-fluid px-5">
            <div className="row mt-4">
                {inferieur.map(inf => (
                    <div className="col-12 col-sm-6 col-md-4" key={inf.id}>
                        <div className="card border-0 rounded-0 position-relative p-0 mt-5" style={{ backgroundColor: "#F4F1E8" , cursor: "pointer" }}
                onClick={() => navigate(`/menu/${m.id}`)}>
                            <div style={{ backgroundColor: "#F0CECF" }}>
                                <div className="row">
                                    <div className="col-6">
                                        <div style={{ backgroundColor: "#F0CECF" }} className="position-relative">
                                            <div
                                                className="position-absolute top-0 start-0 ms-3 mt-3 fw-regular fs-4"
                                                style={{ color: "#a96869ff" }}
                                            >
                                                {inf.pieces} PIÈCES
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div style={{ backgroundColor: "#F0CECF" }} className="position-relative">
                                            <div
                                                className="position-absolute top-0 end-0 mx-3 mt-3 fw-regular fs-4"
                                                style={{ color: "#a96869ff" }}
                                            >
                                                {inf.prix} €
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-5">
                                    <img src={`/${inf.image}.jpg`} alt={inf.nom} className="img-fluid mt-3 mb-3 px-3" />
                                </div>
                            </div>
                            <div className="mt-4 p-3 text-center text-white fs-5 fw-regular" style={{ backgroundColor: "#D89293" }}>{inf.nom}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            </div>
        </div>
    );
}

export default MenusInf;
