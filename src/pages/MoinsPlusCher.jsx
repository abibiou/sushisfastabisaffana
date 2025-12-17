import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function MoinsPlusCher() {
    const [produits, setProduits] = useState([]);
      const navigate = useNavigate();
    useEffect(() => {
        fetch("/boxes.json")
            .then((res) => res.json())
            .then((data) => setProduits(data));
    }, []);

    const eco = produits.length
        ? produits.reduce((min, item) => item.prix < min.prix ? item : min)
        : null;

    const cher = produits.length
        ? produits.reduce((max, item) => item.prix > max.prix ? item : max)
        : null;

    return (
        <div>
            <div className="">
                <div className="row">
                    {eco && (
                        <div className="col-md-12 px-5" key={eco.id}>
                            <div className="border-0 rounded-0 px-5">
                                <div style={{ backgroundColor: "#F4F1E8" }}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-6">
                                            <div className="card-body" style={{cursor: "pointer" }}
                onClick={() => navigate(`/menu/${m.id}`)}>
                                                <h1 className='fw-bold' style={{ fontSize: "70px", lineHeight: "1.0", color: "#D89293" }}>Le menu <br />le moins cher</h1>
                                                <h3 className="fw-bold mt-3" style={{ color: "#D89293" }} >{eco.nom}</h3>
                                                <h3 className="card-text" style={{ color: "#D89293" }} >Pièces : {eco.pieces}</h3>
                                                <h4 className="" style={{ color: "#D89293" }} >Prix : {eco.prix} €</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img src={`/${eco.image}.jpg`} className="img-fluid " alt={eco.nom} style={{ width: "90%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="bandeausushisfast mt-5 mb-5">
                        <div className="scroll-text">
                            <span className='fs-3'>SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST</span>
                        </div>
                    </div>
                    {cher && (

                        <div className="col-md-12 px-5" key={cher.id}>
                            <div className="border-0 rounded-0 px-5">
                                <div style={{ backgroundColor: "#F4F1E8" }}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-6">
                                            <div className="card-body" >
                                                <h1 className='fw-bold' style={{ fontSize: "70px", lineHeight: "1.0", color: "#D89293" }}>Le menu <br />le plus cher</h1>
                                                <h3 className="fw-bold mt-3" style={{ color: "#D89293" }} >{cher.nom}</h3>
                                                <h3 className="card-text" style={{ color: "#D89293" }} >Pièces : {cher.pieces}</h3>
                                                <h4 className="" style={{ color: "#D89293" }} >Prix : {cher.prix} €</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-center">
                                            <img
                                                src={`/${cher.image}.jpg`}
                                                className="img-fluid "
                                                alt={cher.nom}
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default MoinsPlusCher;