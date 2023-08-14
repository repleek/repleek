import { createTheme, ThemeOptions } from "@mui/material/styles";

import dark from "./dark.json";
import light from "./light.json";

const themes = {
  light: createTheme(light as ThemeOptions),
  dark: createTheme(dark as ThemeOptions),
};

export default themes;
