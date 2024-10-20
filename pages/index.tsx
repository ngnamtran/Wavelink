

import Head from 'next/head'
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
}
