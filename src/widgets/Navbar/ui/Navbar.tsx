import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModel } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, [setIsAuthModalOpen]);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={classNames(classes.Navbar, {}, [ className ])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={classes.links}
        onClick={onShowModal}
      >
        {t('login')}
      </Button>
      <LoginModel
        isOpen={isAuthModalOpen}
        onClose={onCloseModal}
      />
    </div>
  );
};
