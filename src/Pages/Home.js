import React from "react";
import CategoriesBar from "../Components/CategoriesBar";
import Corousel from "../Components/Corousel";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularBar from "../Components/PopularBar";

function Home() {
  return (
    <>
      <Navbar />
      <Corousel />
      <CategoriesBar />

     <PopularBar/>
      <Footer/>
    </>
  );
}

export default Home;
