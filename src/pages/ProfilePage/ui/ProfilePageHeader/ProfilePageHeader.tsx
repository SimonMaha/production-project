import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onStartEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(updateProfileData());
  }, [dispatch]);
  
  return (
    <div className={classNames(classes.ProfilePageHeader, {}, [ className ])}>
      <Text title={t('profile')}/>
      {readonly
        ? (
          <Button
            className={classes.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onStartEdit}
          >
            {t('edit')}
          </Button>
        ) : (
          <>
            <Button
              className={classes.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancelEdit}
            >
              {t('cancel')}
            </Button>
            <Button
              className={classes.saveBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onSave}
            >
              {t('save')}
            </Button>
          </>
        )
      }
    </div>
  );
};
