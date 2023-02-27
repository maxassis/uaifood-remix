import styles from "~/styles/home.css";
import back from "public/images/back.avif"
import logoWhite from "~/assets/logo-white.jpg";
import { useActionData, Form } from "@remix-run/react";
import Autocomplete , { links as inputStyle } from "~/components/Autocomplete.jsx"
import axios from 'redaxios'

export function links() {
  return [{ rel: "stylesheet", href: styles}, ...inputStyle()];
}

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
 
 const res = await axios
  .get(`https://developers.zomato.com/api/v2.1/locations?query=${data.city}`, {
    headers: {
      "user-key": "0f0709faa524595d78efbf821cc36f94",
    },
  })
  .then(response => {
    return response.data.location_suggestions
  })
  .catch(error => console.log(error.response));

 let returnData = await res

 if (!returnData[0]?.title) returnData = {noCity: true}

  return returnData
};


export default function Index() {
    const data = useActionData()
 
  return (
    <div
      className="home__container"
      style={{ backgroundImage: `url(${back})` }}
    >
      <img className="home__logo" src={logoWhite} alt="logo white" />

      <div className="home__title-wrapper">
        <h1 className="home__title">
          Descubra os melhores<br/> restaurantes em sua cidade
        </h1>

        <Form method="post" className="home__form">
            <Autocomplete city={Array.isArray(data) ? data : []} noCity={data?.noCity} local="search" />
            <button className="home__button">BUSCAR</button>
        </Form>
      </div>
    </div>
  );
}
