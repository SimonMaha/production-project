import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entity/User';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, [setIsAuthModalOpen]);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [ className ])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={classes.links}
          onClick={onLogout}
        >
          {t('logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.Navbar, {}, [ className ])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classes.links}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      {isAuthModalOpen && (
        <LoginModal
          isOpen={isAuthModalOpen}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
};
