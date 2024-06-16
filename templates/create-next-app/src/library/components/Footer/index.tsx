/** Generated automaticaly by repleek */
/** IMPORT Start */
import React from "react";

import { Box, BoxProps, Typography, TypographyProps } from "@repleek/mui";

/** IMPORT End */

/** TYPE DEFINITION Start */
type FooterProps = {};

type DefaultProps = {
  ROOT: BoxProps;
  qaksrs: TypographyProps;
};

/** TYPE DEFINITION End */

/** COMPONENT Start */
const Footer: React.FC<FooterProps> = (props) => {
  const { ROOT, qaksrs } = defaultProps;

  return (
    <Box {...ROOT}>
      <Typography {...qaksrs} />
    </Box>
  );
};

export default Footer;

/** COMPONENT End */

/** DEFAULT PROPS Start */
const defaultProps: DefaultProps = {
  ROOT: {
    tag: "div",
    css: { textAlign: "center", paddingTop: "8px", paddingBottom: "8px" },
  },
  qaksrs: {
    variant: "overline",
    text: "Copyright © 2023 dbuilder. All rights reserved. ",
    gutterBottom: false,
    noWrap: false,
  },
};

/** DEFAULT PROPS End */
