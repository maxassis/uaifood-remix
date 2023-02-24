import { useState, useEffect } from "react";
import axios from "redaxios";
import Header, { links as headerStyle } from "../components/header";
import Card from "../components/Card";
import LeftBar, { links as leftBarStyle} from "../components/leftBar";
import { links as inputStyle } from "~/components/Autocomplete.jsx";
import restaurants from "~/styles/restaurants.css";
import cardStyle from "~/styles/card.css";
import { useLoaderData, Form, useActionData } from "@remix-run/react";

export function links() {
  return [
    { rel: "stylesheet", href: restaurants },
    { rel: "stylesheet", href: cardStyle },
    ...headerStyle(),
    ...inputStyle(),
    ...leftBarStyle()
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
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });

  const data = await res;

  return {
    restaurants: data.best_rated_restaurant,
    city: data,
  };
};


export default function Cities() {
  let { city, restaurants } = useLoaderData();
  let data = useActionData()
  const [estabelecimentos, setEstabelecimentos] = useState()
  const [price, setPrice] = useState("")
  const [stars, setStars] = useState("")
  
  useEffect(() => {
    setEstabelecimentos(restaurants)
  },[restaurants])



 function teste(num, price){
 
 function filterStars(num) {
    const tt = restaurants.filter((item) => {
      if (parseInt(item.restaurant.user_rating.aggregate_rating) == num)
        return item;
      if (parseInt(item.restaurant.user_rating.aggregate_rating) == num)
        return item;
      if (parseInt(item.restaurant.user_rating.aggregate_rating) == num)
        return item;
      if (parseInt(item.restaurant.user_rating.aggregate_rating) == num)
        return item;
      if (parseInt(item.restaurant.user_rating.aggregate_rating) == num)
        return item;
    });
    setEstabelecimentos(tt);
  }
  filterStars(num)
  
  if (price == "50") {
    function filterPrice50() {
      const tt = restaurants.filter((item) => {
        if (item.restaurant.average_cost_for_two <= "50") return item;
      });
      setEstabelecimentos(tt);
    }
    filterPrice50();
  }
  
  if(price == "50_80") {
  function filterPrice50_80() {
    const tt = restaurants.filter((item) => {
      if (
        item.restaurant.average_cost_for_two >= "50" &&
        item.restaurant.average_cost_for_two <= "80"
      )
        return item;
    });
    console.log(tt);
    setEstabelecimentos(tt);
  }
  filterPrice50_80()
}
  
if (price == "80_110") {
 function filterPrice80_110() {
    const tt = restaurants.filter((item) => {
      if (
        item.restaurant.average_cost_for_two >= "80" &&
        item.restaurant.average_cost_for_two <= "110"
      )
        return item;
    });
    console.log(tt);
    setEstabelecimentos(tt);
  }
  filterPrice80_110()
}

if(price == "110") {
 function filterPrice110() {
    const tt = restaurants.filter((item) => {
      if (item.restaurant.average_cost_for_two > "110") return item;
    });
    console.log(tt);
    setEstabelecimentos(tt);
  }
  filterPrice110()
}
}

  //  console.log(stars)


  return (
    <>
     <Form method="post" >
        <Header city={data} />
     </Form>    
      <div className="restaurants__grid">
        <div className="restaurants__left-menu">
          <LeftBar price={setPrice} stars={setStars} filter={teste}
          />
        </div>
        <div className="restaurants__show-results">
          <h3 className="restaurants__title-city" >
            Restaurantes em {city.city}
          </h3>
          <div className="restaurants__results-grid">
            {estabelecimentos &&
              estabelecimentos.map((item, index) => {
                return <Card restaurant={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
