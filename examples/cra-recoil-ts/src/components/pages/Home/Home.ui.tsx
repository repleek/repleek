// Generate automaticaly by dbuilder
import React from "react";

import { Box, Container } from "@billers/library";

const Home = (props) => {
  const {
    ROOT,
    zysub,
    SuggestionList,
    hhmeh,
    lyiwl,
    jxuln,
    MovieList,
    qqynq,
    Suggestion,
    pxcjq,
  } = props;
  return (
    <Box {...ROOT}>
      <Box {...qqynq} {...Suggestion} />
      <Box {...pxcjq}>
        <Container {...hhmeh}>
          <Box {...zysub} {...SuggestionList} />
        </Container>
        <Container {...lyiwl}>
          <Box {...jxuln} {...MovieList} />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: {
    tag: "div",
    className: "home-page",
    css: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      background: "#121212",
    },
  },
  zysub: { tag: "div", css: { minHeight: "380px" } },
  hhmeh: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { position: "relative", display: "flex", flexDirection: "column" },
  },
  lyiwl: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { marginTop: "70px", marginBottom: "70px" },
  },
  jxuln: { tag: "div", css: { display: "flex", flexWrap: "wrap" } },
  qqynq: { tag: "div", className: "suggestion-bg", css: { minHeight: "90vh" } },
  pxcjq: {
    tag: "div",
    css: { position: "sticky", marginTop: "-243px", zIndex: "1" },
  },
};
