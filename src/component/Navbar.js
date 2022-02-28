import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../sass/style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-danger ha">
          <div className="container-fluid">
            <a className="navbar-brand text-light ms-3 ull ulll" href="/">
              LIVESCORE
            </a>
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
                  <a
                    className="nav-link active  mx-3 text-light  ull ulll"
                    aria-current="page"
                    href="/Content"
                  >
                    Highlight
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-3  text-light  ull ulll"
                    href="/About"
                  >
                    About Us
                  </a>
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
                  <a
                    className="nav-link mx-3  text-light  ull ulll"
                    href="/Leagues"
                  >
                    Leagues
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
