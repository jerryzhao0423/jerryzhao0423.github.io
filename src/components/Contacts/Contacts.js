import * as React from "react";
import cx from "classnames";
import soData from "../../_data/social";
import "./Contacts.scss";

export const Contacts = ({ className }) => {
  return (
    <div className="contacts">
      <div className="maxWidthContainer">
        <div className="sectionTitle">Contacts</div>
        <div className="sectionSubTitle">You know where you can find me</div>
        <div className="row">
          <div className="col-sm-6 detailSection">
            <div className="subSectionTitle">Social Media:</div>
            {soData.map(link => (
              <a className="socialLinks" target="_blank" href={link.link}>
                <span className="icon">
                  <i className={cx("fa", link.icon)} />
                </span>
                <span className="address">{link.link}</span>
              </a>
            ))}
          </div>
          <div className="col-sm-6 detailSection">
            <div className="subSectionTitle">Other Contacts:</div>
            <a className="socialLinks" target="_blank" href="mailto:cupidzhaozhejian@hotmail.com">
              <span className="icon">
                <i className="fa fa-at"/>
              </span>
              <span className="address">cupidzhaozhejian@hotmail.com</span>
            </a>
            <a className="socialLinks" target="_blank" href="#">
              <span className="icon">
                <i className="fa fa-phone"/>
              </span>
              <span className="address">+1 613-329-9738</span>
            </a>
            <a className="socialLinks" target="_blank" href="#">
              <span className="icon">
                <i className="fa fa-wechat"/>
              </span>
              <span className="address">cupid1993</span>
            </a>
            <a className="socialLinks" target="_blank" href="#">
              <span className="icon">
                <i className="fa fa-map"/>
              </span>
              <span className="address">26 Norton Ave, Toronto, ON, M2N 0H6</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
