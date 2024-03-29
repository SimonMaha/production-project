import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo, SVGProps } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(cls.Icon, {}, [className])} />
  );
});
