/** Build with repleek */
// #region Import
import React from "react";

import { Box, BoxProps, Typography } from "@repleek/mui";
// #endregion

// #region Typre Definition
type FooterProps = Partial<BoxProps> & {};
// #endregion

// #region FooterComponent
const Footer: React.FC<FooterProps> = (props) => {
  const { ...rootProps } = props;

  return (
    <Box
      tag={"div"}
      css={{ textAlign: "center", paddingTop: "8px", paddingBottom: "8px" }}
      {...rootProps}
    >
      <Typography
        variant={"overline"}
        text={"Copyright © 2023 dbuilder. All rights reserved. "}
        gutterBottom={false}
        noWrap={false}
      />
    </Box>
  );
};

export default Footer;
// #endregion
