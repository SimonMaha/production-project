import { classNames, Mods } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [ isFocused, setIsFocused ] = useState(false);
  const [ caretPosition, setCaretPosition ] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus]);

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e?.target as HTMLInputElement;
    setCaretPosition(target?.selectionStart || 0);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={classNames(classes.InputWrapper, mods, [className])}>
      { placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={classes.caretWrapper}>
        <input
          ref={inputRef}
          className={classes.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...otherProps}
        />
        { isCaretVisible && (
          <span
            className={classes.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});
