import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticlesPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(classes.ArticlesPage, {}, [ className ])}>

    </div>
  );
};

export default memo(ArticlesPage);
