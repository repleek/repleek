// Generate automaticaly by dbuilder
import React from "react";

import { Box, ButtonIcon, Icon, Image } from "@billers/library";

const Nav = (props) => {
  const {
    ROOT,
    vkpcay,
    tzmoje,
    ouukwn,
    konzxl,
    pzzhdc,
    isszod,
    dmehad,
    wdmhct,
    gtrxsv,
    wbigrh,
    hodaxq,
  } = props;
  return (
    <Box {...ROOT}>
      <Box {...vkpcay}>
        <Image {...gtrxsv} />
        <Box {...konzxl}>
          <ButtonIcon {...dmehad} Icon={<Icon {...wdmhct} />} />
          <ButtonIcon {...pzzhdc} Icon={<Icon {...isszod} />} />
          <ButtonIcon {...tzmoje} Icon={<Icon {...ouukwn} />} />
          <ButtonIcon {...wbigrh} Icon={<Icon {...hodaxq} />} />
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;

Nav.defaultProps = {
  ROOT: {
    tag: "div",
    className: "nav-bar",
    css: {
      paddingTop: "8px",
      paddingRight: "28px",
      paddingLeft: "8px",
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  vkpcay: {
    tag: "div",
    css: {
      borderTopLeftRadius: "110px",
      borderTopRightRadius: "110px",
      borderBottomLeftRadius: "110px",
      borderBottomRightRadius: "110px",
      width: "260px",
      paddingTop: "0px",
      paddingRight: "16px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      background: "#3D3B58B3",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  tzmoje: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    size: "medium",
    color: "secondary",
  },
  ouukwn: {
    color: "inherit",
    icon: "FaLinkedinIn",
    fontSize: "inherit",
    hidden: false,
  },
  konzxl: { tag: "div" },
  pzzhdc: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  isszod: {
    color: "inherit",
    icon: "FaInstagram",
    fontSize: "inherit",
    hidden: false,
  },
  dmehad: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  wdmhct: {
    color: "inherit",
    icon: "FaGithub",
    fontSize: "inherit",
    hidden: false,
  },
  gtrxsv: {
    alt: "Image description for better SEO",
    src: "https://minio.billers.io/billers/app_v2/Me_25ff08b932.png",
    dynamic: true,
    css: {
      width: "60px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#FFFFFF8F",
      borderTopLeftRadius: "110px",
      borderTopRightRadius: "110px",
      borderBottomLeftRadius: "110px",
      borderBottomRightRadius: "110px",
      background: "#FFFFFF57",
    },
  },
  wbigrh: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  hodaxq: {
    color: "inherit",
    icon: "FaPaperPlane",
    fontSize: "inherit",
    hidden: false,
  },
};
