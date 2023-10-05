import React from "react";

import { housesData } from "../data";

import { Link, useParams } from "react-router-dom";

import { BiBed, Bibath, BiArea, BiBath } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="mb-4 text-lg">{house.address}</h3>
          </div>
          <div className="flex mb-4 text-sm lg:mb-0 gap-x-2">
            <div className="px-3 text-white bg-green-500 rounded-full">
              {house.type}
            </div>
            <div className="px-3 text-white rounded-full bg-violet-500">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            <div className="flex mb-6 gap-x-6 text-violet-700">
              <div className="flex items-center gap-x-2">
                <BiBed className="text-2xl" />
                <div>{house.bedrooms}</div>
              </div>{" "}
              <div className="flex items-center gap-x-2">
                <BiBath className="text-2xl" />
                <div>{house.bathrooms}</div>
              </div>{" "}
              <div className="flex items-center gap-x-2">
                <BiArea className="text-2xl" />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className="flex-1 w-full px-6 py-8 mb-8 bg-white border border-gray-300 rounded-lg">
            <div className="flex items-center mb-8 gap-x-4">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />{" "}
              </div>
              <div>
                <div className="text-lg font-bold"> {house.agent.name}</div>
                <Link to="" className="text-sm text-violet-700">
                  View Listings
                </Link>
              </div>
            </div>

            <form className="flex flex-col gap-y-4">
              <input
                className="w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14"
                type="text"
                name=""
                id=""
                placeholder="Name"
              />
              <input
                className="w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14"
                type="text"
                name=""
                id=""
                placeholder="Email"
              />
              <input
                className="w-full px-4 text-sm border border-gray-300 rounded outline-none focus:border-violet-700 h-14"
                type="text"
                name=""
                id=""
                placeholder="Phone"
              />

              <textarea
                className="w-full p-4 text-sm text-gray-400 border border-gray-300 rounded outline-none resize-none focus:border-violet-700 h-36 "
                placeholder="Message"
                defaultValue="Hello, I am interested in [the property]"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="w-full py-4 text-sm text-white transition rounded bg-violet-700 hover:bg-violet-800">
                  Send Message
                </button>
                <button className="w-full p-4 text-sm transition border rounded border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
