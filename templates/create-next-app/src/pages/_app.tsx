import type { AppProps } from "next/app";
import { DbuilderProvider } from "dbuilder-library-ts";
import { theme } from "@/theme";
import i18n from "@/locales/i18n";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <DbuilderProvider push={router.push} theme={theme} i18n={i18n}>
      <Component {...pageProps} />
    </DbuilderProvider>
  );
}
