import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function MenuDetail() {
 const { id } = useParams();
 const navigate = useNavigate();
 const [menu, setMenu] = useState(null);


 useEffect(() => {
   fetch("/boxes.json")
     .then(res => res.json())
     .then(data => {
       const menuTrouve = data.find(m => m.id === Number(id));
       setMenu(menuTrouve);
     });
 }, [id]);


 if (!menu) return <p>Chargement...</p>;


 return (
   <div className="container my-5"
   style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
   >
     <div className="card p-4 rounded-0"
     style={{ backgroundColor: "#F4F1E8", color: "#D89293", border:"none"}}>


       <div className="row align-items-center">
         <div className="col-md-6">
           <img
             src={`/${menu.image}.jpg`}
             alt={menu.nom}
             className="img-fluid"
           />
         </div>


         <div className="col-md-6">
           <h2 style={{ textTransform: "uppercase" }}>{menu.nom}</h2>
           <p>Pièces : {menu.pieces}</p>
           <p><strong>Prix : {menu.prix} €</strong></p>


           <h4>Aliments</h4>
               <ul className="list-group" style={{color: "#D89293"}}>
               {menu.aliments.map((aliment, i) => (
                   <li
                   key={i}
                   className="list-group-item d-flex justify-content-between"
                   style={{
                       color: "#D89293",
                       backgroundColor: "#F0CECF", 
                       border: "1px solid #F4F1E8"}}>
                   {aliment.nom}
                   <strong>x{aliment.quantite}</strong>
                   </li>
               ))}
               </ul>
         </div>
       </div>


       <div className="text-end mt-3">
         <button className="btn btn-retour px-3 py-2 rounded-3" onClick={() => navigate(-1)}>
           Retour
         </button>
       </div>


     </div>
   </div>
 );
}


export default MenuDetail;