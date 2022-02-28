import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gideon from "../images/gideon.jpeg";
import peter from "../images/peter.jpg";
import fasasi from "../images/fasasi.jpg";
import ore from "../images/ore.jpg";
import rofiat from "../images/rofiat.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About Us";
  });
  return (
    <>
      <h3 className="text-center">Meet Our Team</h3>

      <p></p>
      <div className="d-flex justify-content-center justify-content-evenly">
        <div className="d-flex flex-column  justify-content-evenly ">
          <div className="card border-0" style={{ maxWidth: "15rem" }}>
            <img
              src={gideon}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Gideon Zod Peters </h5>
              <p className="card-text">
                Frontend Developer | Android Developer
              </p>
            </div>
          </div>
          <div className="card border-0" style={{ maxWidth: "15rem" }}>
            <img
              src={peter}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Ogar Peter Junior </h5>
              <p className="card-text">Frontend Developer | UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column  align-self-center">
          <div className="card border-0" style={{ maxWidth: "15rem" }}>
            <img src={ore} className="card-img-top rounded-circle" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Omogbehin Oreoluwa Oluwatobi</h5>
              <p className="card-text">Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-evenly ">
          <div className="card border-0" style={{ maxWidth: "15rem" }}>
            <img
              src={fasasi}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Fasasi Qasim Babatunde</h5>
              <p className="card-text">Frontend Developer | React Developer</p>
            </div>
          </div>
          <div className="card border-0" style={{ maxWidth: "15rem" }}>
            <img
              src={rofiat}
              className="card-img-top rounded-circle"
              alt="..."
            />
            <div className="card-body text-center">
              <h5 className="card-title">Fasasi Rofiat</h5>
              <p className="card-text">Frontend Developer | UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
