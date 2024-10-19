/** Build with repleek */
// #region Import
import React from "react";

import { Box, BoxProps, Icon, Typography, TypographyProps } from "@repleek/mui";
// #endregion

// #region Typre Definition
type ModalContentProps = Partial<BoxProps> & {
  email: TypographyProps & {
    email?: string,
  },
};
// #endregion

// #region ModalContentComponent
const ModalContent: React.FC<ModalContentProps> = (props) => {
  const { email, ...rootProps } = props;

  return (
    <Box
      tag={"div"}
      css={{
        width: "480px",
        minHeight: "239px",
        backgroundColor: "rgba(20, 24, 27, 1)",
        borderRadius: "4px",
        paddingLeft: "16px",
        paddingRight: "16px",
        display: "flex",
        alignItems: "center",
      }}
      {...rootProps}
    >
      <Icon
        color={"inherit"}
        icon={{ name: "IoRocketOutline", library: "io5" }}
        fontSize={"inherit"}
        css={{ fontSize: "46px" }}
      />
      <Box tag={"div"} css={{ flexGrow: "1", paddingLeft: "12px" }}>
        <Typography
          variant={"h3"}
          text={"😜 Thank you for your registration <b>{{email}}</b>"}
          gutterBottom={false}
          noWrap={false}
          css={{ fontSize: "22px", lineHeight: "31px" }}
          {...email}
        />
      </Box>
    </Box>
  );
};

export default ModalContent;
// #endregion
