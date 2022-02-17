//Generate automaticaly by dbuilder
import React from "react";
import { Box, Title, Button } from "@billers/library";

const Home = (props) => {
  return (
    <Box {...props["ROOT"]}>
      <Box {...props["JV_qJRsMD"]}>
        <Button {...props["X-O5UNZ93"]} />
      </Box>
      <Title {...props["2e-Wi1RgC"]} />
      <Box {...props["C_zPYzLjO"]} />
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: { tag: "div" },
  "2e-Wi1RgC": {
    variant: "h1",
    text: "Mon titre ici",
    gutterBottom: false,
    noWrap: false,
  },
  C_zPYzLjO: { tag: "div" },
  JV_qJRsMD: { tag: "div", css: { minHeight: "100vh" } },
  "X-O5UNZ93": {
    text: "Ajoutez votre texte ici!",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    iconStart: false,
    iconEnd: false,
    href: "/movie",
  },
};
