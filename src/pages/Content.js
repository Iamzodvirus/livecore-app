import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.scorebat.com/video-api/v3/feed/?token=MTM4MDBfMTY0NTI2NzIyNV85MjkzODhhYjVmODAxODYwYzhkYjJkMjdkYzhlMDQ1NDRlYTVkZWVj`,
    })
      .then((res) => {
        console.log(res.data.response);
        setData(res.data.response);
      })
      .catch((e) => console.dir(e));
  }, []);

  return (
    <>
      <h2 className="mt-3">Preview Highlight and Game stats</h2>

      <Link className="btn mer-wa" to="/">
        Go Back
      </Link>
      <div className="content-container row">
        {data.map((item) => (
          <div
            key={item.thumbnail}
            className="video-div col-lg-3 col-md-4 col-sm-6 col-xsm-6"
            onClick={() => window.open(item.matchviewUrl)}
          >
            <div>
              <img src={item.thumbnail} alt="#" />
            </div>
            <div>
              <h6>{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
