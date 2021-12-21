import React from "react";
import Home from "./Home";

const index = () => {
  return (
    <Home
      nestedComponent={{
        children: (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cumque repudiandae, quae iusto dolor est in illo? Nam, inventore
            facilis! Omnis aspernatur nam repudiandae voluptas quo vitae? Minus,
            accusamus beatae?
          </p>
        ),
      }}
    />
  );
};

export default index;
