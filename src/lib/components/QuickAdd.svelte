<script>
  import ColorSwatch from "@lib/components/ColorSwatch.svelte";
  import { getOptionValues } from "@lib/swatches";

  export let product;
  export let selectedOptions = {};
  export let selectedVariant = null;
  export let updateOption;
  export let getAvailableOptions;
  export let hasAvailableOption;
  export let onSelect;


const colors = getOptionValues(product, "Color");

  $: sizeOptions = getAvailableOptions && selectedOptions
    ? getAvailableOptions("Size")
    : [];

  $: onSelect?.(selectedVariant);

  function selectSize(size) {
    updateOption?.("Size", size);
  }

  function selectColor(color) {
    updateOption?.("Color", color);
  }

  function isSizeAvailable(size) {
    return hasAvailableOption?.("Size", size);
  }
</script>



<div class=" flex flex-col pt-2">
  <span class="text-xs  opacity-60 uppercase tracking-wide ">Size</span>
  <div class="flex gap-1.5">
    {#each sizeOptions as size}
      <button
        type="button"
        on:click={() => isSizeAvailable(size) && selectSize(size)}
        disabled={!isSizeAvailable(size)}
        class:underline={selectedOptions.Size === size}
        class:opacity-40={!isSizeAvailable(size)}
        class:pointer-events-none={!isSizeAvailable(size)}
        class=" text-xs pe-2.5 py-2 min-h-[48px] hover:underline"
      >
        {size}
      </button>
    {/each}
  </div>

  <span class="text-xs  opacity-60 uppercase tracking-wide pb-4">Color</span>

{#key JSON.stringify(selectedOptions)}
  <ColorSwatch
    colors={colors}
    selected={selectedOptions.Color}
    onSelect={selectColor}
    hasAvailableOption={hasAvailableOption}
  />
{/key}
</div>


