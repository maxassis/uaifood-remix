import axios from "redaxios"
import Header, { links as headerStyle } from "../components/header";
import Card from "../components/Card";
import { links as inputStyle } from "~/components/Autocomplete.jsx"
import restaurants from "~/styles/restaurants.css"
import cardStyle from "~/styles/card.css"
 

export function links() {
  return [{ rel: "stylesheet", href: restaurants }, { rel: "stylesheet", href: cardStyle },
   ...headerStyle(), ...inputStyle()];
}

export const loader = async ({params}) => {
   console.log(params)  
   console.log(params.id)

const res = await axios
   .get(
     `https://developers.zomato.com/api/v2.1/location_details?entity_id=${params.id}&entity_type=city`,
     {
       headers: {
         "user-key": "0f0709faa524595d78efbf821cc36f94",
       },
     }
   )
   .then((response) => {
      console.log(response.data);
      return response.data
   })
   .catch((error) => {
     console.log(error.response);
   });
  
    return await res    
};


export default function Cities() {
    return (
      <>
      <Header />
      <div className="restaurants__grid">
        <div className="restaurants__left-menu" ></div>
        <div className="restaurants__show-results" >
            <h3 className="restaurants__title-city">Restaurantes em São Paulo</h3>
            <div className="restaurants__results-grid">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>




      </div>
      </>


    )
}