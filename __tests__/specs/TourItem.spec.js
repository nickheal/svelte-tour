import { render } from '@testing-library/svelte';
import TourItem from 'src/TourItem';

const mockRegister = jest.fn();
const mockUnregister = jest.fn();

jest.mock('src/index', () => ({
  __esModule: true,
  register: jest.fn(() => mockRegister()),
  unregister: jest.fn(() => mockUnregister())
}));

describe('TourItem', () => {
  it('should register, and unregister itself on mount, and unmount', () => {
    const { unmount } = render(TourItem, { message: '' });
    expect(mockRegister).toHaveBeenCalled();
    unmount();
    expect(mockUnregister).toHaveBeenCalled();
  });
});
