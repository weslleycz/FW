import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open}></Header>
      <Component open={open} setOpen={setOpen} {...pageProps} />
      <Footer open={open}></Footer>
    </>
  );
}

export default MyApp;
