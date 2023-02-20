import styles from "~/styles/autocomplete.css";
import { Link } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Autocomplete({ cities, local }) {

  let inputStyles = {
    "border": "1px solid lightgray"
  }

  return (
    <div className="autocomplete__wrapper" style={local == "header" ? {maxWidth: "70%"} : {maxWidth: "600px"} }>
      <div
        className="autocomplete__icon-wrapper"
        style={local == "header" ? {marginLeft: "20px"} : {marginLeft: "0"} }   
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
          style={local == "header" ? inputStyles : {"borderBottom": "1px solid lightgray"}}
        />
      </div>

      <div className="autocomplete__suggestions-wrapper">
        {cities &&
          cities.map((item, index) => {
            return (
              <Link to="/restaurants/73" key={index}>
                <div className="autocomplete__suggestions">{item.title}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
