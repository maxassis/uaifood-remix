import styles from "~/styles/header.css"
import logoRed from "~/assets/logo-red.jpg";
import Autocomplete from "./Autocomplete";
import { Link } from "@remix-run/react";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }
  
export default function Header({city, tt}) {
  // city && console.log(city)
   

   return (
    <div className="header">
       <Link to={"/"} className="header__link" > 
       <img className="header__img" src={logoRed} alt="logo red" /> 
       </Link> 
       <Autocomplete local="header" city={city} style={{height: "35px"}}/>
       <button className="header__button">BUSCAR</button>
    </div>
   )
}