import { writable } from 'svelte/store';

const tourStore = writable({
  active: false,
  items: []
});

export { default as Tour } from './Tour.svelte';
export { default as TourItem } from './TourItem.svelte';

export function register(el) {
  tourStore.update(store => ({
    ...store,
    items: [...store.items, el]
  }));
};

export function run() {
  tourStore.update(store => ({
    ...store,
    active: true
  }));
};

export function stop() {
  tourStore.update(store => ({
    ...store,
    active: false
  }));
};

export function unregister(el) {
  tourStore.update(store => ({
    ...store,
    items: store.items.splice(store.items.indexOf(el), 1)
  }));
}

export const subscribe = tourStore.subscribe.bind(tourStore);
