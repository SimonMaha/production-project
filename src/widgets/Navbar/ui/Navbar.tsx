import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['main', 'about']);
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={'/'} className={classes.mainLink} theme={AppLinkTheme.INVERTED}>{t('main' as never)}</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.INVERTED} >{t('about' as never)}</AppLink>
      </div>
    </div>
  );
};
