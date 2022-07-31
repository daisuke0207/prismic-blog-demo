import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "~/styles/theme";
import highlightStyles from "highlight.js/styles/night-owl.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: highlightStyles }];
};

export default function App() {
  return (
    <html lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme} resetCSS={false}>
          <Outlet />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
