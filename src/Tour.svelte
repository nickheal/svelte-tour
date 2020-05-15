<script>
  import { stop, subscribe } from './index';

  export let TourTip;
  
  let active, items;
  let currentStep = 0;
  $: atEnd = currentStep === items.length - 1;

  subscribe(store => {
    ({active, items} = store);
  });

  function onClickNext() {
    if (atEnd) {
      stop();
      return;
    }
    currentStep++;
  }

  function getScrimStyle(step) {
    const boundingRect = step.getBoundingClientRect();
    const left = boundingRect.left;
    const right = left + boundingRect.width;
    const top = boundingRect.top;
    const bottom = top + boundingRect.height;
    const { innerHeight, innerWidth } = window;
    return `
      clip-path: polygon(
        0px 0px,
        0px ${innerHeight}px,
        ${left}px ${innerHeight}px,
        ${left}px ${top}px,
        ${right}px ${top}px,
        ${right}px ${bottom}px,
        ${left}px ${bottom}px,
        ${left}px ${innerHeight}px,
        ${innerWidth}px ${innerHeight}px,
        ${innerWidth}px 0px
      );
    `;
  }

	function getTooltipStyle(step) {
    const TOOLTIP_WIDTH = 300;
    const boundingRect = step.getBoundingClientRect();
    const itemHorizontalCenter = boundingRect.left + boundingRect.width / 2;
    let tooltipLeft = itemHorizontalCenter - (TOOLTIP_WIDTH / 2);
    if (tooltipLeft < 0) tooltipLeft = 0;
    if (tooltipLeft + TOOLTIP_WIDTH > window.innerWidth) tooltipLeft = window.innerWidth - TOOLTIP_WIDTH;
    return `transform: translate(${tooltipLeft}px, ${boundingRect.bottom}px);`;
	}
</script>

{#if active && items && items.length}
  <div class="scrim" style={getScrimStyle(items[currentStep])}></div>
  <div class="tooltip" style={getTooltipStyle(items[currentStep])}>
    <TourTip
      {atEnd}
      message={items[currentStep].getAttribute('data-tour')}
      {onClickNext}
    ></TourTip>
  </div>
{/if}

<style>
  .scrim {
    background-color: #333;
    height: 100%;
    left: 0;
    opacity: 0.75;
    position: fixed;
    top: 0;
    transition: clip-path 500ms ease-in-out;
    width: 100%;
    z-index: 1;
  }
  .tooltip {
    background: #fff;
    border-radius: 4px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 500ms ease-in-out;
    width: 300px;
    z-index: 3;
  }
</style>
