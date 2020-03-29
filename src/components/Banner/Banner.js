import * as React from "react";
import classNames from "classnames";
import { Link as ScrollLink } from "react-scroll";
import "./Banner.scss";

export const Banner = ({ className }) => {
  return (
    <div className={classNames("Banner", className)}>
      <div className="BannerContainer">
        <h1 className="myName">Zhejian(Jerry) Zhao</h1>
        <div className="welcome">Welcome to my site</div>
      </div>
      <ScrollLink to="profile" smooth duration={500} className="down-arrow">
        <img src="/static/img/ic-down.svg" />
      </ScrollLink>
      <div className="BannerOverlay" />
    </div>
  );
};
