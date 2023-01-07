import React from "react";
import Banner from "../Component/layout/Banner";
import Additonalinfo from "../Component/layout/Additonalinfo";
import Advertisement from "../Component/layout/Advertisement";
import Arrivalitem from "../Component/layout/Arrivalitem";
import Bestseller from "../Component/layout/Bestseller";
import TimeOfTheYear from "../Component/layout/TimeOfTheYear";
import SpcialOffer from "../Component/layout/SpcialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <Additonalinfo />
      <Advertisement />
      <Arrivalitem />
      <Bestseller />
      <TimeOfTheYear />
      <SpcialOffer />
    </>
  );
};

export default Home;
