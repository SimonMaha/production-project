import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(classes.ArticleCodeBlockComponent, {}, [ className ])}>
      <Code text={block.code} />
    </div>
  );
});
