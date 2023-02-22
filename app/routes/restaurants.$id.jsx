import axios from "redaxios";
import Header, { links as headerStyle } from "../components/header";
import Card from "../components/Card";
import { links as inputStyle } from "~/components/Autocomplete.jsx";
import restaurants from "~/styles/restaurants.css";
import cardStyle from "~/styles/card.css";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
//import { redirect } from "@remix-run/node";

export function links() {
  return [
    { rel: "stylesheet", href: restaurants },
    { rel: "stylesheet", href: cardStyle },
    ...headerStyle(),
    ...inputStyle(),
  ];
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

  return await res  
};

export const loader = async ({ params }) => {
  // console.log(params);
  // console.log(params.id);

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
     // console.log(response.data.best_rated_restaurant);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  const data = await res;
  //console.log(data);

  return {
    restaurants: data.best_rated_restaurant,
    city: data,
  };
};

export default function Cities() {
  const { city, restaurants } = useLoaderData();
  let data = useActionData()
  console.log(restaurants);

  return (
    <>
     <Form method="post" >
        <Header city={data}/>
     </Form>    
      <div className="restaurants__grid">
        <div className="restaurants__left-menu">
        </div>
        <div className="restaurants__show-results">
          <h3 className="restaurants__title-city">
            Restaurantes em {city.city}
          </h3>
          <div className="restaurants__results-grid">
            {restaurants &&
              restaurants.map((item, index) => {
                return <Card restaurant={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
