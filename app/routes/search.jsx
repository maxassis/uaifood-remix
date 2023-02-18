import styles from "~/styles/home.css";
import back from "~/assets/back.webp";
import logoWhite from "~/assets/logo-white.jpg";
import { useActionData, Form } from "@remix-run/react";
import Autocomplete , { links as inputStyle } from "~/components/Autocomplete.jsx"

export function links() {
  return [{ rel: "stylesheet", href: styles}, ...inputStyle()];
}

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  console.log(data);


 return data
};


export default function Index() {
    const data = useActionData()
    console.log(data);

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

        <Form method="post" action="/search" className="home__form">
            <Autocomplete />
            {/* <input type="text" id="city" name="city" /> */}
            <button className="home__button">BUSCAR</button>
        </Form>
      </div>
    </div>
  );
}
