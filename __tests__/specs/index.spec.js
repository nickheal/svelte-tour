import { register, run, stop, subscribe, unregister } from 'src/index';

describe('index', () => {
  describe('register/unregister', () => {
    it ('should add/remove items to the state', () => {
      const update = jest.fn();
      subscribe(update);
      register('test');
      expect(update.mock.calls[1][0].items).toEqual(['test']);
      unregister('test');
      expect(update.mock.calls[2][0].items).toEqual([]);
    });
  });

  describe('run/stop', () => {
    it ('should start/stop the tour', () => {
      const update = jest.fn();
      subscribe(update);
      run();
      expect(update.mock.calls[1][0].active).toBe(true);
      stop();
      expect(update.mock.calls[2][0].active).toBe(false);
    });
  });
});
