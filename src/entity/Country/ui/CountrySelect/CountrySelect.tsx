import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.USA, content: Country.USA },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Mongolia, content: Country.Mongolia  },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);
  
  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('select country')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
