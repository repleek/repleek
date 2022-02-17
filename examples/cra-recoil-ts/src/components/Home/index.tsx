import React from "react";
import Home from "./Home";
import Link from "@mui/material/Link";

const index = () => {
  return (
    <div>
      <Link href="/movie">Movie</Link>
      <Home />;
    </div>
  );
};

export default index;
