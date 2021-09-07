import { writable } from 'svelte/store';

const tourStore = writable({
  active: false,
  items: []
});

export { default as Tour } from './Tour.svelte';
export { default as TourItem } from './TourItem.svelte';
export { default as TourTip } from './TourTip.svelte';
export { tour } from './tour.js';

export function register(el, parameters) {
  tourStore.update(store => ({
    ...store,
    items: [...store.items.filter(item => item.element !== el), { element: el, parameters: parameters }]
  }));
};

export function run() {
  tourStore.update(store => {
    
    const sortedItems = store.items;
    sortedItems.sort((a,b) => (a.parameters.sequence > b.parameters.sequence) ? 1 : ((b.parameters.sequence > a.parameters.sequence) ? -1 : 0))
    return {
      ...store,
      items: sortedItems,
      active: true
    };
  });
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
    items: store.items.filter(item => item.element !== el)
  }));
}

export const subscribe = tourStore.subscribe.bind(tourStore);
