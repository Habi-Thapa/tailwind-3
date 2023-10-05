import React, { useContext, useState } from "react";

import {
  RiMap2Fill,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiMapPin2Line,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  console.log(country);
  return (
    <Menu as="div" className="dropdown">
      <Menu.Button
        onClick={() => setIsOpen((toogle) => !toogle)}
        className="dropdown-btn  w-full text-left"
      >
        <RiMapPin2Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px] ">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
