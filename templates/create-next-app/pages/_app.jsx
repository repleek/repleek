import React from "react";
import Head from "next/head";
//@mui
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import DateAdapter from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
//@mui theme
import { theme, createEmotionCache } from "src/theme";
// next router
import { useRouter } from "next/router";
//global css or scss
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();
const App = (props) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
  const { push } = useRouter();
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RouteProvider push={push}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Component {...pageProps} />
            </LocalizationProvider>
          </ThemeProvider>
        </CacheProvider>
      </RouteProvider>
    </>
  );
};

export default App;
