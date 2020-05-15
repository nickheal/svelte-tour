import { fireEvent, render } from '@testing-library/svelte';
import Tour from 'src/Tour';
import TourItem from 'src/TourItem';
import TourTip from 'src/TourTip';
import { run } from 'src/index';
import flushPromises from '../utils/flushPromises';

describe('Tour', () => {
  it('should run, and then close when next button is clicked', async () => {
    const { queryByTestId } = render(Tour, { TourTip });
    render(TourItem, { message: 'An item.' });
    render(TourItem, { message: 'An item 2.' });
    run();
    await flushPromises();
    expect(queryByTestId('next-button'));
    fireEvent.click(queryByTestId('next-button'));
    await flushPromises();
    fireEvent.click(queryByTestId('next-button'));
    await flushPromises();
    expect(queryByTestId('next-button')).toBeNull();
  });
});
