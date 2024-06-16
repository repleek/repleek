"use client";
import { RepleekProvider } from "@repleek/mui";
import { useRouter } from "next/navigation";
import i18n from "@/locales/i18n";
import themes from "@/theme";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RepleekProvider push={router.push} i18n={i18n} themes={themes}>
      {children}
    </RepleekProvider>
  );
}
