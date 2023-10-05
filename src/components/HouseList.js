import React, { useContext } from "react";

import { HouseContext } from "./HouseContext";

import { ImSpinner2 } from "react-icons/im";

import House from "./House";
import { Link } from "react-router-dom";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  console.log(houses);
  return (
    <section className="mb-20">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {houses.map((house, index) => {
            return (
              <Link key={house.id} to={`/propetry/${house.id}`}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
