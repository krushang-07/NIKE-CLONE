import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import Offers from "./sections/Offers";
import PopulerProducts from "./sections/PopulerProducts";
import Service from "./sections/Service";
import Sub from "./sections/Sub";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";
import React from "react";

// import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopulerProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x-py-10">
      <Service />
    </section>
    <section className="padding">
      <Offers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Sub />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
