import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      { t('about page' as never) }
    </div>
  );
};

export default AboutPage;
