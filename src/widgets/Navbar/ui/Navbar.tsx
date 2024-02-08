import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink to={'/'} className={classes.mainLink} theme={AppLinkTheme.INVERTED}>Main</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.INVERTED} >About</AppLink>
      </div>
    </div>
  );
};
