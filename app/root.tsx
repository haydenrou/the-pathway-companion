import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  useLoaderData
} from "@remix-run/react";
import { LinksFunction, json } from "@remix-run/node";

import styles from "./tailwind.css";
import { db } from "./db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const loader = async () => {
  return json(await db.path.findMany());
};

export default function App() {
  const paths = useLoaderData<typeof loader>();

  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <ul>
          {paths.map((path) => (
            <li key={path.id}>
              <a href={path.name}>{path.name}</a>
            </li>
          ))}
        </ul>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
