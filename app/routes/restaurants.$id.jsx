import axios from "redaxios"
import Header, { links as headerStyle } from "../components/header";
import { links as inputStyle } from "~/components/Autocomplete.jsx"


export function links() {
  return [...headerStyle(), ...inputStyle()];
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
      
      
      </>


    )
}