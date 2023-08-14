/** Generated automaticaly by dbuilder */
/** IMPORT Start */
import React from "react";

import { Box, BoxProps, Typography, TypographyProps } from "@repleek/mui";

/** IMPORT End */

/** TYPE DEFINITION Start */
type FooterProps = {};

type DefaultProps = {
  ROOT: BoxProps;
  qkpceq: TypographyProps;
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Footer: React.FC<FooterProps> = (props) => {
  const { ROOT, qkpceq } = defaultProps;

  return (
    <Box {...ROOT}>
      <Typography {...qkpceq} />
    </Box>
  );
};

export default Footer;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: {
      backgroundColor: "rgba(38, 45, 52, 1)",
      textAlign: "center",
      paddingTop: "8px",
      paddingBottom: "8px",
    },
  },
  qkpceq: {
    variant: "overline",
    text: "Copyright © 2023 dbuilder. All rights reserved. ",
    gutterBottom: false,
    noWrap: false,
  },
};

/** DEFAULT PROPS End */
