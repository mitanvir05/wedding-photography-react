import React from "react";
import ChooseReason from "../../ChooseReason/ChooseReason";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <h1 className="text-center m-4">Wedding Photography</h1>
      <Banner></Banner>

      <Services></Services>
      <ChooseReason></ChooseReason>
    </div>
  );
};

export default Home;
