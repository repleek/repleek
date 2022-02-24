// Generate automaticaly by dbuilder
import React from "react";

import { Box, Button, Container, Title } from "@billers/library";

const Suggestion = (props) => {
  const {
    ROOT,
    suggestionBg,
    mtyufg,
    releaseDate,
    wykave,
    title,
    eyfjxd,
    tnjfzj,
    discover,
    nhywae,
    wpokbn,
    votes,
  } = props;
  return (
    <Box {...ROOT} {...suggestionBg}>
      <Container {...eyfjxd}>
        <Box {...nhywae}>
          <Title {...mtyufg} {...releaseDate} />
          <Title {...wykave} {...title} />
          <Box {...wpokbn} {...votes} />
          <Button {...tnjfzj} {...discover} />
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
  mtyufg: {
    variant: "h3",
    text: "Release date : {{releaseDate}}",
    gutterBottom: false,
    noWrap: false,
    css: {
      fontSize: "18px",
      fontWeight: 300,
      textTransform: "uppercase",
      marginBottom: "12px",
    },
  },
  wykave: {
    variant: "h1",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "58px", fontWeight: 700, marginTop: "8px" },
  },
  eyfjxd: {
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
  tnjfzj: {
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
  nhywae: { tag: "div" },
  wpokbn: { tag: "div", css: { marginBottom: "16px" } },
};
