import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/animate.css";
import Head from 'next/head';
import AOS from "aos";
import { useEffect } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import ScrollTop from "./components/scrollTop";
// import "@/js/custom.js";
// import "@/js/animate.js";



export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800|Old+Standard+TT:400,400i,700" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/main.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="js/animate.js" async></script>
      <script src="js/custom.js" async></script>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <ScrollTop/>
  </>
}
