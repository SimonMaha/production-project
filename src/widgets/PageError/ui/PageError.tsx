import { classNames } from 'shared/lib/classNames/classNames';
import classes from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
  className?: string,
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(classes.PageError, {}, [className])}>
      <p>{t('an unexpected error occurred' as never)}</p>
      <Button onClick={reloadPage}>{t('reload page' as never)}</Button>
    </div>
  );
};
