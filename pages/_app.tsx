import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";

export default function App({ Component, pageProps }: AppProps) {
  const userLogin = false;
    if (!userLogin) return <Login/>
  return <Component {...pageProps} />;
}
