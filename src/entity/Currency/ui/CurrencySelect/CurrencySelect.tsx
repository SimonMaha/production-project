import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.PLN, content: Currency.PLN },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.MNT, content: Currency.MNT },
];

export const CurrencySelect = memo(({
  className, value, onChange, readonly
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);
  
  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('select currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
