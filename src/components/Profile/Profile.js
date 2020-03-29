import * as React from "react";
import classNames from "classnames";
import { Element } from "react-scroll";
import "./Profile.scss";

export const Profile = ({ className }) => {
  return (
    <Element className="profile" id="profile" name="profile">
      <div className="maxWidthContainer">
        <div className="sectionTitle">Profile</div>
        <div className="sectionSubTitle">Some facts about me</div>
        <div className="row">
          <div className="col-sm-4 detailSection">
            <div className="subSectionTitle">Details:</div>
            <div className="subSectionLabel">Name:</div>
            <div className="subSectionValue">Zhejian(Jerry) Zhao</div>
            <div className="subSectionLabel">Age:</div>
            <div className="subSectionValue">26 years old</div>
            <div className="subSectionLabel">Location:</div>
            <div className="subSectionValue">Toronto, ON, Canada</div>
            <div className="subSectionLabel">Job Position</div>
            <div className="subSectionValue">Web Developer/Front End Developer</div>
          </div>
          <div className="col-sm-4">
            <img src="/static/img/avatar.jpeg" alt="jerryzhao" className="profileAvatar" />
          </div>
          <div className="col-sm-4 detailSection">
            <div className="subSectionTitle">About Me:</div>
            <div className="subSectionValue">
              I finished my undergraduate at Tianjin University in 2015. And after that, I came to Canada and completed my master degree as
              an Electrical and Computer Engineering student at Queen's University.
              <br />
              I've become a web developer / front-end developer since then. Mostly I'm responsible to do React Web apps, while I'm also good
              at E-commerce site and E-Newsletter development.
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
