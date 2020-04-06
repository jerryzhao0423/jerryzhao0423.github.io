import React from "react";
import cx from "classnames";
import "./Portfolio.scss";
import InfluencerImg from "../../static/portfolio/Influencer.png";
import HububImg from "../../static/portfolio/Hubub.png";
import NewCenterImg from "../../static/portfolio/NewCenter.png";
import VenusImg from "../../static/portfolio/Venus.png";
import JoyImg from "../../static/portfolio/Joy.png";
import TelephiaImg from "../../static/portfolio/Telephia.png";
import P100Img from "../../static/portfolio/P100.png";
import AlignImg from "../../static/portfolio/Align.png";
import ProphetImg from "../../static/portfolio/Prophet.png";
import GilletteImg from "../../static/portfolio/Gillette.png";
import SK2Img from "../../static/portfolio/SK2.png";
import BSToolImg from "../../static/portfolio/BSTool.png";
import TeleDashImg from "../../static/portfolio/TeleDash.png";

export const Portfolio = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className={cx("Portfolio", { menuOpen })}>
      <div className="Portfolio_MenuBtn">
        <div className="Portfolio_OpenBtn" onClick={()=>setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="Portfolio_Nav">
        <div>Web Apps</div>
        <div>Landing Pages</div>
        <div>Modern Websites</div>
        <div>E-Commerce</div>
      </div>
      <div className="Portfolio_RightContainer">
        <div className="Portfolio_RightSpace" />
        <div className="Portfolio_ProjectContainer">
          <div>
            <div className="Portfolio_Single">
              <img src={InfluencerImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Influencers Site</div>
            </div>
            <div className="Portfolio_Single">
              <img src={HububImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Hubub</div>
            </div>
            <div className="Portfolio_Single">
              <img src={NewCenterImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">New Center</div>
            </div>
            <div className="Portfolio_Single">
              <img src={BSToolImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Billing Snapshot</div>
            </div>
            <div className="Portfolio_Single">
              <img src={TeleDashImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Telephia Dashboard</div>
            </div>
          </div>

          <div>
            <div className="Portfolio_Single">
              <img src={TelephiaImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Telephia</div>
            </div>
            <div className="Portfolio_Single">
              <img src={ProphetImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Prophet</div>
            </div>
            <div className="Portfolio_Single">
              <img src={SK2Img} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">SK-II</div>
            </div>
          </div>

          <div>
            <div className="Portfolio_Single">
              <img src={AlignImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Align</div>
            </div>
            <div className="Portfolio_Single">
              <img src={P100Img} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Pinterest100</div>
            </div>
          </div>

          <div>
            <div className="Portfolio_Single">
              <img src={GilletteImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Gillette</div>
            </div>
            <div className="Portfolio_Single">
              <img src={VenusImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Gillette Venus</div>
            </div>
            <div className="Portfolio_Single">
              <img src={JoyImg} alt="" className="Portfolio_Img" />
              <div className="Portfolio_Text">Joy + Glee</div>
            </div>
          </div>
        </div>
        <div className="Portfolio_RightSpace" />
      </div>
    </div>
  );
};
