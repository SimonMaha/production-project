import { screen, act } from '@testing-library/react';
import { componentRenderer } from 'shared/lib/tests/componentRenderer/componentRenderer';
import { Counter } from './Counter';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
  test('test render', () => {
    componentRenderer(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('test increment', async () => {
    componentRenderer(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await act(() => userEvent.click(screen.getByTestId('increment-btn')));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('test decrement', async () => {
    componentRenderer(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await act(() => userEvent.click(screen.getByTestId('decrement-btn')));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
 
