import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import Loading from "@/components/Loading";



export default function App({ Component, pageProps }: AppProps) {
  const [userLogin, loading, _error] = useAuthState(auth) 

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!userLogin) return <Login />
  return <Component {...pageProps} />;
}
