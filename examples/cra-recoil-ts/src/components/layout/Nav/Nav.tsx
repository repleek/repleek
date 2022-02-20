//Generate automaticaly by dbuilder
import React from "react";
import { Box, ButtonIcon, Icon, Image } from "@billers/library";

const Nav = (props) => {
  return (
    <Box {...props["ROOT"]}>
      <Box {...props["NfQ4bBfUD"]}>
        <Image {...props["F61L_411z"]} />
        <Box {...props["DQxGiyuHS"]}>
          <ButtonIcon
            {...props["-x66Un6pL"]}
            Icon={<Icon {...props["XKqXOcDYG"]} />}
          />
          <ButtonIcon
            {...props["eyU3cvoDQ"]}
            Icon={<Icon {...props["mgrdV1zJY"]} />}
          />
          <ButtonIcon
            {...props["LeqgQ3N0D"]}
            Icon={<Icon {...props["Sv00u7b7g"]} />}
          />
          <ButtonIcon
            {...props["aGdUkVBcQ"]}
            Icon={<Icon {...props["2eUfxNhK1"]} />}
          />
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
  NfQ4bBfUD: {
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
  LeqgQ3N0D: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    size: "medium",
    color: "secondary",
  },
  Sv00u7b7g: {
    color: "inherit",
    icon: "FaLinkedinIn",
    fontSize: "inherit",
    hidden: false,
  },
  DQxGiyuHS: { tag: "div" },
  eyU3cvoDQ: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  mgrdV1zJY: {
    color: "inherit",
    icon: "FaInstagram",
    fontSize: "inherit",
    hidden: false,
  },
  "-x66Un6pL": {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  XKqXOcDYG: {
    color: "inherit",
    icon: "FaGithub",
    fontSize: "inherit",
    hidden: false,
  },
  F61L_411z: {
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
  aGdUkVBcQ: {
    type: "button",
    disabled: false,
    disableFocusRipple: false,
    disableRipple: false,
    color: "secondary",
  },
  "2eUfxNhK1": {
    color: "inherit",
    icon: "FaPaperPlane",
    fontSize: "inherit",
    hidden: false,
  },
};
