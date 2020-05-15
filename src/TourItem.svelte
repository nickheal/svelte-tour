<script>
  import { onMount, onDestroy } from 'svelte';
  import { register, unregister } from './index';

  export let message;
  let element;

  onMount(() => {
    register(element);
  });

  onDestroy(() => {
    unregister(element);
  });
</script>

<div bind:this={element} data-tour={message}>
  <slot></slot>
</div>
