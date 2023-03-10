import type { AppProps } from "next/app";
import { MuiProvider, RouteProvider } from "dbuilder-library-ts";
import { theme } from "@/theme";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RouteProvider push={router.push}>
      <MuiProvider theme={theme}>
        <Component {...pageProps} />
      </MuiProvider>
    </RouteProvider>
  );
}
