//Generate automaticaly by dbuilder
import React from "react";
import { Box, Container } from "@billers/library";

const Home = (props) => {
  const { SuggestionList, MovieList, Suggestion } = props;
  return (
    <Box {...props["ROOT"]}>
      <Box {...props["_p2TBsDwu"]} {...Suggestion} />
      <Box {...props["Tqud0rAZb"]}>
        <Container {...props["66PNrjvA1"]}>
          <Box {...props["C_zPYzLjO"]} {...SuggestionList} />
        </Container>
        <Container {...props["2edjCYtLO"]}>
          <Box {...props["VfXTw2k2o"]} {...MovieList} />
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
  C_zPYzLjO: { tag: "div", css: { minHeight: "380px" } },
  "66PNrjvA1": {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { position: "relative", display: "flex", flexDirection: "column" },
  },
  "2edjCYtLO": {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { marginTop: "70px", marginBottom: "70px" },
  },
  VfXTw2k2o: { tag: "div", css: { display: "flex", flexWrap: "wrap" } },
  _p2TBsDwu: {
    tag: "div",
    className: "suggestion-bg",
    css: { minHeight: "90vh" },
  },
  Tqud0rAZb: {
    tag: "div",
    css: { position: "sticky", marginTop: "-243px", zIndex: "1" },
  },
};
