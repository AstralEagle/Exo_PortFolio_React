import React from "react";
import {Link} from "react-router-dom";
 const Header = () => {
     return(
         <header>
             <ul className="d-flex">
                 <li>
                     <Link to={"/"}>Accueil</Link>
                     <Link to={"/present"}>Présentation</Link>
                     <Link to={"/project"}>Projet</Link>
                     <Link to={"/skill"}>Compétence</Link>
                 </li>
             </ul>
         </header>
     )
 }

 export default Header;