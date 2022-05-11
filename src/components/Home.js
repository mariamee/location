import React from "react";
import Adverts from "./Adverts";
import Filter from "./Filter";
import Posts from "./Previews";

const Home = () => {
  return (
    <div>
      <Filter />
      <Adverts />
      <Posts />
    </div>
  );
};

export default Home;
