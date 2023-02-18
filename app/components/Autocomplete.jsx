import styles from "~/styles/autocomplete.css";
import { useState } from "react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Autocomplete() {
  const arr = ["teste", "javascript", "php", "c#", "go", "dart"];

  return (

      <div className="autocomplete__wrapper">
        <input
          placeholder="Digite a sua cidade"
          type="text"
          className="autocomplete__input"
        />

         <div className="autocomplete__suggestions-wrapper">
          {arr.map((item,index) => {
            return <div className="autocomplete__suggestions" key={index}>{item}</div>
          })}
         </div> 

        {/* <div className="autocomplete__suggestions"></div> */}
      </div>

  );
}
