<script>
  export let atEnd;
  export let message;
  export let onClickNext;
</script>

<div class="container">
  <p class="message">{@html message}</p>

  <button data-testid="next-button" on:click={onClickNext}>
    {atEnd ? 'Done': 'Next'}
  </button>
</div>

<style>
  .container {
    padding: 24px;
  }
  .message {
    margin: 0 0 16px;
  }
</style>