import { classNames } from 'shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, { }, [className, classes[theme]])}
      {...otherProps}
    >
      { children }
    </Link>
  );
});
