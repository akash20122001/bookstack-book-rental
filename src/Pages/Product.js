import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PopularBar from "../Components/PopularBar";

function Product() {
  return (
    <>
      <Navbar />
      <div className="card glass lg:card-side text-neutral-content">
    <figure className="p-6">
      <img src="https://picsum.photos/id/1005/300/200" className="rounded-lg shadow-lg"/>
    </figure> 
    <div className="max-w-md card-body">
      <h2 className="card-title">Glass</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
      <div className="card-actions">
        <button className="btn glass rounded-full">Get Started</button>
      </div>
    </div>
  </div>
      <PopularBar />
      <Footer />
    </>
  );
}

export default Product;
