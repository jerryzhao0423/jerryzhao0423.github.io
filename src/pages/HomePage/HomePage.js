import React from "react";
import { Banner } from "../../components/Banner/Banner";
import {Profile} from "../../components/Profile/Profile";

export const Homepage = () => {
  return (
    <div className="Homepage">
      <Banner className="Homepage__Banner" />
      <Profile/>
    </div>
  );
};
