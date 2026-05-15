"use client";

import { useLanguage } from "@/lib/LanguageContext";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <LegalPageLayout
      title={t.privacy_policy.title}
      lastUpdated={t.privacy_policy.last_updated}
      sections={t.privacy_policy.sections}
    />
  );
}
