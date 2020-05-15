import { register, subscribe, unregister } from 'src/index';

// const flushPromises = () => new Promise(setImmediate);

// let mockState;

// jest.mock('svelte/store', () => ({
//   __esModule: true,
//   writable: (initialState) => {
//     mockState = initialState;
  
//     return {
//       update: func => (mockState = func(mockState))
//     };
//   }
// }));

describe('index', () => {
  describe('register', () => {
    it ('should add items to the state', () => {
      const update = jest.fn();
      subscribe(update);
      register('test');
      expect(update.mock.calls[1][0].items).toEqual(['test']);
    });
  });
});

describe('unregister', () => {
  it ('should remove items from the state', () => {
    const update = jest.fn();
    register('test');
    subscribe(update);
    unregister('test');
    expect(update.mock.calls[1][0].items).toEqual([]);
  });
});
