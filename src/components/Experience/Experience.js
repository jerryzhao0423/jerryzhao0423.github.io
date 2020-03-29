import * as React from "react";
import classNames from "classnames";
import edData from "../../_data/education";
import caData from "../../_data/career";
import "./Experience.scss";

export const Experience = ({ className }) => {
  return (
    <div className="experience">
      <div className="maxWidthContainer">
        <div className="sectionTitle">Experience</div>
        <div className="sectionSubTitle">Young but experienced</div>
        <div className="subSectionTitle">Education</div>
        {edData.map(item => (
          <div className="row educationRow">
            <div className="col-xs-12 col-sm-5 educationSection">
              <div className="school">{item.school}</div>
              <div className="year">{item.year}</div>
            </div>
            <div className="col-xs-12 col-sm-7 detailSection">
              <div>{item.degree}</div>
              <div>{item.program}</div>
              <div>
                <span className="locationIcon">
                  <i className="fa fa-map-marker"/>
                </span>
                {item.location}
              </div>
            </div>
          </div>
        ))}

        <div className="subSectionTitle">Career</div>
        {caData.map(item => (
          <div className="row educationRow">
            <div className="col-sm-5 educationSection">
              <div className="school">{item.company}</div>
              <div className="year">{item.year}</div>
            </div>
            <div className="col-sm-7 detailSection">
              <div>{item.title}</div>
              <div>
                <span className="locationIcon">
                  <i className="fa fa-map-marker"/>
                </span>
                {item.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
