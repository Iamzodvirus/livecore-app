import React, { useEffect } from "react";

const Live = () => {
  useEffect(() => {
    document.title = "Live";
  });
  return (
    <>
      <div>
        <script src="https://widget.enetscores.com/FW72D7F84DCBE79929"></script>
        hello
      </div>
    </>
  );
};

export default Live;
