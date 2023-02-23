import styles from "~/styles/autocomplete.css";
import { Link } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Autocomplete({ city, local }) {
 
  return (
    <div className="autocomplete__wrapper" style={local == "header" ? {maxWidth: "75%"} : {maxWidth: "600px"} }>
      <div
        className="autocomplete__icon-wrapper" 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 256 256"
        >
          <path fill="none" d="M0 0h256v256H0z" />
          <circle
            cx="128"
            cy="104"
            r="32"
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            fill="none"
            stroke="gray"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 0 1 160 0Z"
          />
        </svg>
        <input
          placeholder="Digite a sua cidade"
          type="text"
          className="autocomplete__input"
          id="city"
          name="city"
          required
          style={local == "header" ? {"border": "1px solid lightgray"} : {"borderBottom": "1px solid lightgray"}}
        />
      </div>

      <div className="autocomplete__suggestions-wrapper">
        {city &&
          city.map((item, index) => {
            return (
              <Link to={`/restaurants/${item.entity_id}`} key={index}>
                <div className="autocomplete__suggestions">{item.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
