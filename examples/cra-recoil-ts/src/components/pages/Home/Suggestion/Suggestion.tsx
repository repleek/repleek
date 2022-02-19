//Generate automaticaly by dbuilder
import React from "react";
import { Box, Title, Container } from "@billers/library";

const Suggestion = (props) => {
  const { suggestionBg, detail, title, tags } = props;
  return (
    <Box {...props["ROOT"]} {...suggestionBg}>
      <Container {...props["uuPWX64Pf"]}>
        <Title {...props["WPE9CfkiK"]} {...detail} />
        <Title {...props["DB-g0ATHf"]} {...title} />
        <Title {...props["R1_smP_L2"]} {...tags} />
      </Container>
    </Box>
  );
};

export default Suggestion;

Suggestion.defaultProps = {
  ROOT: {
    tag: "div",
    className: "suggestion-slide",
    css: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #F4F4F400 0%, #121212 88%)",
    },
  },
  WPE9CfkiK: {
    variant: "h3",
    text: "{{detail}}",
    gutterBottom: false,
    noWrap: false,
  },
  "DB-g0ATHf": {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "58px", fontWeight: 700 },
  },
  R1_smP_L2: {
    variant: "h2",
    text: "{{tags}}",
    gutterBottom: false,
    noWrap: false,
  },
  uuPWX64Pf: {
    maxWidth: "lg",
    disableGutters: false,
    fixed: false,
    css: {
      minHeight: "calc(80vh - 200px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
  },
};
