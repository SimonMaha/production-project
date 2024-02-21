import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { ComponentRenderer } from 'shared/lib/tests/componentRenderer/componentRenderer';

describe('Sidebar', () => {
  test('Test render', () => {
    ComponentRenderer(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Test button toggle', () => {
    ComponentRenderer(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
