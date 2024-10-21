import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Login from "./login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/config/firebase";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";



export default function App({ Component, pageProps }: AppProps) {
  const [userLogin, loading, _error] = useAuthState(auth) 

  //save who login, and their last time
  useEffect(() =>{
    const setUserDB = async () => {
      try {
        //read document in firebase store
        await setDoc(
          //para: database, name, key(user.uid) 
            doc(db,'users', userLogin?.uid as string ), {
              uid : userLogin?.uid,
              lastOnline: serverTimestamp(),
              avatar : userLogin?.photoURL
            },
            {merge: true} //save the user login is the same, only update the change
            

        )
      } catch (error) {
        console.log('Error in user BD', error)
      }
    }
    if (userLogin) {
      setUserDB()
    }
  },[userLogin])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!userLogin) return <Login />
  return <Component {...pageProps} />;
}
