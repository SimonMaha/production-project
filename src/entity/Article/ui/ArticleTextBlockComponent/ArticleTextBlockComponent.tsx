import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames('', {}, [ className ])}>
      {block.title && (
        <Text title={block.title} className={classes.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={classes.paragraph} />
      ))}
    </div>
  );
});
