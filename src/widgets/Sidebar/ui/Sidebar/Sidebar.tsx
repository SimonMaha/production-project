import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

type SidebarProps = {
	className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation(['main', 'about']);

  const onToggle = () => {
    setCollapsed(prevState => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [ className ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classes.items}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.main}
          className={classes.item}
        >
          <MainIcon className={classes.icon}/>
          <span
            className={classes.link}
          >{t('main')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.about}
          className={classes.item}
        >
          <AboutIcon className={classes.icon}/>
          <span
            className={classes.link}
          >
            {t('about', { ns: 'about' })}
          </span>
        </AppLink>
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={classes.lang} short={collapsed}/>
      </div>
    </div>
  );
};
