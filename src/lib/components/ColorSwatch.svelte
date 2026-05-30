<script>
  export let colors = [];
  export let selected;
  export let onSelect;
  export let hasAvailableOption;
  export let size = "sm";

  $: sizeClass =
  size === "lg"
    ? "w-6 h-6"
    : "w-4 h-4";

  function isColorAvailable(color) {
    return hasAvailableOption?.("Color", color.name);
  }
</script>

<div class="flex gap-[0.075rem] flex-wrap">
  {#each colors as color}

    <button
      type="button"
      on:click={() => isColorAvailable(color) && onSelect(color.name)}
      disabled={!isColorAvailable(color)}
      aria-disabled={!isColorAvailable(color)}
      class:opacity-40={!isColorAvailable(color)}
      class={`relative rounded-xs border border-transparent flex items-center justify-center ${sizeClass}`}
      class:pointer-events-none={!isColorAvailable(color)}
      style="background-color: {color.swatch?.color}"
      aria-label={color.name}
    >

      {#if selected === color.name}
      <span class="text-[9px] md:text-[10px] font-bold text-white drop-shadow-[0_0_2px_black] leading-none">
        X
      </span>
      {/if}

      <span class="sr-only">{color.name}</span>
    </button>

  {/each}
</div>