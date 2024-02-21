import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['main', 'about']);
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>

      </div>
    </div>
  );
};
