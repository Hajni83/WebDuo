"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function TermsOfServicePage() {
  const { t } = useLanguage();

  return (
    <LegalPageLayout
      title={t.terms_of_service.title}
      lastUpdated={t.terms_of_service.last_updated}
      sections={t.terms_of_service.sections}
    />
  );
}
