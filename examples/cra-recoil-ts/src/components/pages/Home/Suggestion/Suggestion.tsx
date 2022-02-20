//Generate automaticaly by dbuilder
import React from "react";
import { Box, Title, Container, Button } from "@billers/library";

const Suggestion = (props) => {
  const { suggestionBg, release_date, title, discover, votes } = props;
  return (
    <Box {...props["ROOT"]} {...suggestionBg}>
      <Container {...props["uuPWX64Pf"]}>
        <Box {...props["ql0CPiKlK"]}>
          <Title {...props["WPE9CfkiK"]} {...release_date} />
          <Title {...props["DB-g0ATHf"]} {...title} />
          <Box {...props["xcIc0_Xh_"]} {...votes} />
          <Button {...props["UxwqPp4wp"]} {...discover} />
        </Box>
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
    text: "Release date : {{release_date}}",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "18px",
      fontWeight: 300,
      textTransform: "uppercase",
      marginBottom: "12px",
    },
  },
  "DB-g0ATHf": {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "58px", fontWeight: 700, marginTop: "8px" },
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
  UxwqPp4wp: {
    text: "Discover",
    type: "button",
    disabled: false,
    disableElevation: false,
    disableFocusRipple: false,
    disableRipple: false,
    fullWidth: false,
    size: "large",
    variant: "contained",
    color: "secondary",
    iconStart: false,
    iconEnd: false,
    css: {
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    },
  },
  ql0CPiKlK: { tag: "div" },
  xcIc0_Xh_: { tag: "div", css: { marginBottom: "16px" } },
};
