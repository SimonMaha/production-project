import { classNames } from 'shared/lib/classNames/classNames';
import classes from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername, LoginThunkDispatch } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string,
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<LoginThunkDispatch>();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);
  
  return (
    <DynamicModuleLoader reducers={initialReducers} >
      <div className={classNames(classes.LoginForm, {}, [ className ])}>
        <Text title={t('authorization form')} />
        {error && <Text text={t('wrong username or password')} theme={TextTheme.ERROR} />}
        <Input
          type='text'
          className={classes.input}
          placeholder={t('enter name')}
          autofocus={true}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type='text'
          className={classes.input}
          placeholder={t('enter password')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={classes.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading }
        >
          { t('login') }
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
