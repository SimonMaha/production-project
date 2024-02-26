import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginModel.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModelProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModel = ({ className, isOpen, onClose }: LoginModelProps) => {
  return (
    <Modal
      className={classNames(classes.LoginModel, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};
