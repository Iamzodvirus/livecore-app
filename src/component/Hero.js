import React from "react";
import { Link } from "react-router-dom";

import Pew from "../images/animated soccer 4.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div>
          <Link to="/content" className="bot">
            Get Started
          </Link>
        </div>
        <h3 className="text-light text-center">
          The best livescore experience !!!{" "}
        </h3>
      </div>
    </>
  );
};

export default Hero;
