import initTranslations from '@/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import TerminalForm from '@/components/TerminalForm';
import InteractiveBlocks from '@/components/InteractiveBlocks';
import ServiceSection from '@/sections/ServiceSection';


const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
const i18nNamespaces = ['home'];

export default async function Services({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['home']);


  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      
        <InteractiveBlocks />
        <ServiceSection />
   
    </TranslationsProvider>
  )
}