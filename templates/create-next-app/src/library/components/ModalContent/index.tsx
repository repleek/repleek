/** Generated automaticaly by repleek */
/** IMPORT Start */
"use client";
import React from "react";

import {
  Box,
  BoxProps,
  Icon,
  IconProps,
  Typography,
  TypographyProps,
} from "@repleek/mui";

/** IMPORT End */

/** TYPE DEFINITION Start */
type ModalContentProps = {
  email: TypographyProps & {
    email?: string,
  },
};

type DefaultProps = {
  ROOT: BoxProps,
  swyems: TypographyProps,
  iwvqpm: IconProps,
  rniwlh: BoxProps,
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { email } = props;
  const { ROOT, swyems, iwvqpm, rniwlh } = defaultProps;

  return (
    <Box {...ROOT}>
      <Icon {...iwvqpm} />
      <Box {...rniwlh}>
        <Typography {...swyems} {...email} />
      </Box>
    </Box>
  );
};

export default ModalContent;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: {
      width: "480px",
      minHeight: "239px",
      backgroundColor: "rgba(20, 24, 27, 1)",
      borderRadius: "4px",
      paddingLeft: "16px",
      paddingRight: "16px",
      display: "flex",
      alignItems: "center",
    },
  },
  swyems: {
    variant: "h3",
    text: "😜 Thank you for your registration <b>{{email}}</b>",
    gutterBottom: false,
    noWrap: false,
    css: { fontSize: "22px", lineHeight: "31px" },
  },
  iwvqpm: {
    color: "inherit",
    icon: { name: "IoRocketOutline", library: "io5" },
    fontSize: "inherit",
    css: { fontSize: "46px" },
  },
  rniwlh: { tag: "div", css: { flexGrow: "1", paddingLeft: "12px" } },
};

/** DEFAULT PROPS End */
