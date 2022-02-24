import React from "react";

import Nav from "./Nav";

const index = ({ children }) => (
    <>
      <Nav />
      {children}
    </>
  );

export default index;
