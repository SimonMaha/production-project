import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Select.module.scss';
import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(() => (
    options?.map(item => (
      <option
        className={classes.option}
        value={item.value}
        key={item.value}
      >
        {item.content}
      </option>
    ))
  ), [options]);

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={classNames(classes.Wrapper, mods, [className])}>
      {label && (
        <span className={classes.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList }
      </select>
    </div>
  );
});
