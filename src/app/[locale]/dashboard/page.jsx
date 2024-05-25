import initTranslations from '@/i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
import TerminalForm from '@/components/TerminalForm';


const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
const i18nNamespaces = ['home'];

export default async function Dashboard({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['home']);


  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <div className='h-screen'>
        <TerminalForm />
      </div>
    </TranslationsProvider>
  )
}