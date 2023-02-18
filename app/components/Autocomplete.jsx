import styles from "~/styles/autocomplete.css"

export function links() {
    return [{ rel: "stylesheet", href: styles }];
  }

export default function Autocomplete () {
    return (
        <input
              placeholder="Digite a sua cidade"
              type="text"
              className="autocomplete-input"
        />        
    )
}

