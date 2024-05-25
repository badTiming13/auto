import TranslationsProvider from '@/components/TranslationsProvider';
import initTranslations  from '@/i18n';
import Test from "@/components/Test";
import LanguageChanger from '@/components/LanguageChanger';
import HomeSection from '@/sections/Home';

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['home']);

  

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <HomeSection />
    </TranslationsProvider>
  );
}
