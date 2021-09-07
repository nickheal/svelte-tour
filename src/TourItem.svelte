<script>
  import { onMount, onDestroy } from 'svelte';
  import { register, unregister } from './index';

  export let message;
  export let sequence = 0;

  let element;

  onMount(() => {
    register(element, { message, sequence });
  });

  onDestroy(() => {
    unregister(element);
  });
</script>

  <slot></slot>
<div bind:this={element}>
</div>
