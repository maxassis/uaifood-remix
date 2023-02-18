import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from '~/styles/reset.css'

export function links() {
  return [{rel: "stylesheet", href: styles}]
}

export const meta = () => ({
  charset: "utf-8",
  title: "Uai Food",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
