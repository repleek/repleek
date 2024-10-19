"use client";
import { RepleekProvider } from "@repleek/mui";
import { useRouter } from "next/navigation";
import i18n from "@/locales/i18n";
import themes from "@/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RepleekProvider
      push={router.push}
      i18n={i18n}
      themes={themes}
      dateAdapter={AdapterDayjs}>
      {children}
    </RepleekProvider>
  );
}
