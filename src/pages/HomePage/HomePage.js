import React from "react";
import { Banner } from "../../components/Banner/Banner";
import { Profile } from "../../components/Profile/Profile";
import { Experience } from "../../components/Experience/Experience";
import { Contacts } from "../../components/Contacts/Contacts";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Banner className="Homepage__Banner" />
      <Profile />
      <Experience />
      <Contacts />
    </div>
  );
};
