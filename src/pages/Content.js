import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <h2>Preview Highlight and Game stats</h2>

      <Link className="btn mer-wa" to="/">
        Go Back
      </Link>
      <div className="content-container">
        {data.map((item) => (
          <div
            key={item.thumbnail}
            className="video-div"
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
