import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModelProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModelProps) => {
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
