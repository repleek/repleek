// Generate automaticaly by dbuilder
import React from "react";

import { Box, Title } from "@billers/library";

const SuggestionCard = (props) => {
  const { ROOT, abovck, title, kuwvez, img } = props;
  return (
    <Box {...ROOT}>
      <Box {...kuwvez} {...img} />
      <Title {...abovck} {...title} />
    </Box>
  );
};

export default SuggestionCard;

SuggestionCard.defaultProps = {
  ROOT: {
    tag: "div",
    className: "suggestion-card",
    css: {
      maxWidth: "290px",
      minHeight: "380px",
      textAlign: "center",
      flex: "1",
      paddingRight: "8px",
      paddingLeft: "8px",
      display: "flex",
      flexDirection: "column",
    },
  },
  abovck: {
    variant: "h3",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "18px", fontWeight: 600, color: "#E3E3E3" },
  },
  kuwvez: {
    tag: "div",
    className: "poster",
    css: {
      minHeight: "340px",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      borderBottomLeftRadius: "8px",
      borderBottomRightRadius: "8px",
      marginBottom: "16px",
      boxShadow: "1px 8px 11px 0px #00000073",
    },
  },
};
