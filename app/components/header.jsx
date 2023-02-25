import styles from "~/styles/header.css"
import logoRed from "~/assets/logo-red.jpg";
import Autocomplete from "./Autocomplete";
import { Link } from "@remix-run/react";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }
  
export default function Header({city, noCity}) {

   return (
    <div className="header">
       <Link to={"/"} className="header__link" > 
       <img className="header__img" src={logoRed} alt="logo red" /> 
       </Link> 
       <Autocomplete local="header" city={city} noCity={noCity} />
       <button className="header__button">BUSCAR</button>
    </div>
   )
}