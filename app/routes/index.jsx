import styles from "~/styles/home.css";
import back from "~/assets/back.webp";
import logoWhite from "~/assets/logo-white.jpg";
import { Form } from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div
      className="home__container"
      style={{ backgroundImage: `url(${back})` }}
    >
      <img className="home__logo" src={logoWhite} alt="logo white" />

      <div className="home__title-wrapper">
        <h1 className="home__title">
          Descubra os melhores <br /> restaurantes em sua cidade
        </h1>

        <Form className="home__form">
            <input
              placeholder="Digite a sua cidade"
              type="text"
              className="home__input"
            />
          <button className="home__button">BUSCAR</button>
        </Form>
      </div>
    </div>
  );
}