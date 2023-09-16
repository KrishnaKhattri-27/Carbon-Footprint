import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function home() {
  return (
    <div>
      <div className="home-wrapper">
        <div className="text-light mx-auto text-center w-75 content">
          <div className="content-top mb-3">
            <h1 className="mb-0">CALCULATE YOUR</h1>
            <h1>EARTH-FRIENDLINESS</h1>
          </div>
          <div className="para-content px-sm-5 mb-4">
            <p>
              Our planet faces urgent challenges, from the pressing issue of
              climate change to the distressing pollution in our oceans and the
              alarming devastation of our precious forests. The responsibility
              to initiate change lies with each and every one of us. Begin your
              journey towards a sustainable future by using our UK-based
              environmental footprint calculator.
            </p>
          </div>
          <div>
            <Link to="/questionnaire">
              <button className="button">TAKE QUESTIONNAIRE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
