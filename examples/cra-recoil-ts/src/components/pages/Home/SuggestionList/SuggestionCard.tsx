//Generate automaticaly by dbuilder
import React from "react";
import { Box, Title } from "@billers/library";

const SuggestionCard = (props) => {
  const { title, img } = props;
  return (
    <Box {...props["ROOT"]}>
      <Box {...props["jpGGJb6-W"]} {...img} />
      <Title {...props["2yLU7HxkD"]} {...title} />
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
  "2yLU7HxkD": {
    variant: "h3",
    text: "{{title}}",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "18px", fontWeight: 600, color: "#E3E3E3" },
  },
  "jpGGJb6-W": {
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
