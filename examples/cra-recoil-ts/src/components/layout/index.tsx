import React from "react";
import Nav from "./Nav";

const index = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default index;
