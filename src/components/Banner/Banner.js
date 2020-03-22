import * as React from "react";
import classNames from "classnames";
import "./Banner.scss";

export const Banner = ({ className }) => {
  return (
    <div className={classNames("Banner", className)}>
        <div className="BannerContainer">
          <h1 className="myName">Zhejian(Jerry) Zhao</h1>
          <div className="welcome">Welcome to my site</div>
        </div>
        <a href="#profile" className="down-arrow">
          <img src="/static/img/ic-down.svg" />
        </a>
        <div className="BannerOverlay" />
    </div>
  );
};
