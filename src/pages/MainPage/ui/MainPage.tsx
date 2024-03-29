import { useTranslation } from 'react-i18next';
import { Counter } from 'entity/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>
      { t('main page') }
      <Counter />
    </div>
  );
};

export default MainPage;
