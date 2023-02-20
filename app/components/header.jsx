import styles from "~/styles/header.css"
import logoRed from "~/assets/logo-red.jpg";
import Autocomplete from "./Autocomplete";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }
  
export default function Header() {
   return (
    <div className="header">
       <img className="header__img" src={logoRed} alt="logo red" /> 
       <Autocomplete local="header"/>
       <button className="header__button">BUSCAR</button>


    </div>
   )
}