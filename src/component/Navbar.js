import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../sass/style.css";
import pol from "../images/vector/default-monochrome-black.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-danger ha">
          <div className="container-fluid">
            <Link
              to="/"
              className=" text-uppercase nav-link active  mx-3 text-light  ull ulll "
              aria-current="page"
            >
              LIVESCORE
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="navbar-toggler bi bi-menu-button-wide-fill" />
              </span>
            </button>

            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/Content"
                    className="nav-link active  mx-3 text-light  ull ulll"
                    aria-current="page"
                  >
                    Highlights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/About"
                    className="nav-link active  mx-3 text-light  ull ulll"
                    aria-current="page"
                  >
                    About us
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link mx-3  text-light ull ulll "
                    href=" https://iamzodvirus.github.io/livescore---live_section/"
                  >
                    Live
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    to="/Leagues"
                    className="nav-link active  mx-3 text-light  ull ulll"
                    aria-current="page"
                  >
                    Leagues
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
