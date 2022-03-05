import type { LinksFunction } from "@remix-run/react/routeModules";
import { LiveReload, Outlet, Links } from "remix";
import styles from "~/styles/app.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Himanshu's BlogSpace</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}