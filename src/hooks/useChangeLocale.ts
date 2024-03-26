import { useRouter } from "next/router";
import { useMemo } from "react";

import { en } from "@/i18n/en";
import { vi } from "@/i18n/vi";

export default function useChangeLocale() {
  const { locale } = useRouter();
  const i18nObj = useMemo(() => {
    if (locale === "en") return en;
    return vi;
  }, [locale]);
  return { locale, i18n: i18nObj };
}
