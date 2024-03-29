import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

type SidebarProps = {
	className?: string;
};

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prevState => !prevState);
  };

  const itemsList = useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed]);

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
        {itemsList}
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={classes.lang} short={collapsed}/>
      </div>
    </div>
  );
});
