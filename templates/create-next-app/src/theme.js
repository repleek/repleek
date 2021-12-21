import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import data from "mui.theme.json";

export const theme = createTheme(data);

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};
