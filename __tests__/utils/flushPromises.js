import 'core-js/web/immediate';

export default function flushPromises () {
  return new Promise(setImmediate);
}
