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
      </Box>
      <Container {...props["2edjCYtLO"]}>
        <Box {...props["VfXTw2k2o"]} {...MovieList} />
      </Container>
    </Box>
  );
};

export default Home;

Home.defaultProps = {
  ROOT: {
    tag: "div",
    css: {
      paddingTop: "0px",
      paddingRight: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
    },
  },
  C_zPYzLjO: { tag: "div", css: { minHeight: "380px" } },
  "66PNrjvA1": {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: { position: "relative", display: "flex", flexDirection: "column" },
  },
  "2edjCYtLO": { maxWidth: "md", disableGutters: false, fixed: false },
  VfXTw2k2o: { tag: "div", css: { minHeight: "100vh" } },
  _p2TBsDwu: {
    tag: "div",
    className: "suggestion-bg",
    css: { minHeight: "90vh" },
  },
  Tqud0rAZb: {
    tag: "div",
    css: {
      position: "sticky",
      marginTop: "-243px",
      background: "linear-gradient(180deg, #12121200 0%, #121212 39%)",
      zIndex: "1",
    },
  },
};
