import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entity/Article';
import { ArticleBlockType, ArticleType } from 'entity/Article/model/types/article';

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  parameters: {
    layout: 'centered',
  },
  tags: [ 'autodocs' ],
} satisfies Meta<typeof ArticleDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      'paragraphs': [
        'Програма, яку по традиції називають «Hello, world!», дуже проста. Вона виводить куди-небуть фразу «Hello, world!», або іншу подібну',
        'JavaScript — це мова, на якій можна виконувати програми в різних середовищах. В нашому випадку мова йде про браузери та про серверну платформу Node.js. Якщо до цього часу ви не написали ні одної лінійки коду на JS і читаєте цей текст в браузері, на комп\'ютері, це значить, що ви буквально в лічених секундах від своєї першої JavaScript-програми.',
        'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блоку',
      'paragraphs': [
        'Програма, яку по традиції називають «Hello, world!», дуже проста. Вона виводить куди-небуть фразу «Hello, world!», або іншу подібну.',
        'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:'
      ]
    },
  ],
};

export const Normal: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator({
    articleDetails: {
      data: article,
    },
  })]
};

export const Loading: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  })]
};

export const Error: Story = {
  args: { id: '1' },
  decorators: [StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  })]
};
