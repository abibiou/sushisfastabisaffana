import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Saveurs() {
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
                <div className="row px-5 align-items-center">
                    <div className="col-md-6">
                        <h1 className="mt-5 fw-bold" style={{ color: "#D89293", fontSize: "70px", lineHeight: "1.00em" }}>NOS SAVEURS</h1>
                        <h3 className="mt-3" style={{ color: "#D89293" }}>Découvrez l'intégralité de nos saveurs </h3>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center mt-3">
                            <img src="/inf13page.jpg" className="img-fluid" style={{ maxWidth: "100%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bandeausushisfast mt-5 mb-5">
                <div className="scroll-text">
                    <span className='fs-3'>SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST ★ SUSHISFAST</span>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <h1 className="mt-5 fw-bold text-center" style={{ color: "#D89293" }}>TOUTES LES SAVEURS</h1>
                <div className="text-center">
                    <img src="/iconeflechedubas.jpg" className="img-fluid" style={{ maxWidth: "40px" }} />
                </div>
                <div className="container-fluid px-5">
                    <div className="row">
                        {menus.map((m) => (
                            <div className="col-12 col-sm-6 col-md-4" key={m.id}>
                                <div className="card h-100 border-0 rounded-0 mt-5" style={{ backgroundColor: "#F4F1E8", cursor: "pointer" }}
                                    onClick={() => navigate(`/menu/${m.id}`)}>
                                    <div style={{ backgroundColor: "#F0CECF" }}>
                                        <div className="row">
                                            <div className="col-12">
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
                                            <p className="card-text fs-5" style={{ color: "#a96869ff" }}>{m.saveurs.join(" , ")}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 p-3 text-center text-white fs-5 fw-regular" style={{ backgroundColor: "#D89293" }}>{m.nom}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saveurs;
