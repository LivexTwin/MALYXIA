<script>
  import ColorSwatch from "@lib/components/ColorSwatch.svelte";
  import { getOptionValues } from "@lib/swatches";

  export let product;
  export let selectedOptions = {};
  export let updateOption;
  export let getAvailableOptions;
  export let hasAvailableOption;

 
  const colors = getOptionValues(product, "Color");


  $: sizeOptions = getAvailableOptions && selectedOptions
    ? getAvailableOptions("Size")
    : [];

    let isKeyboardUser = false;

    window.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        isKeyboardUser = true;
      }
    });
    
    window.addEventListener("mousedown", () => {
      isKeyboardUser = false;
    });
</script>

<section class="flex items-center gap-1">
  <div class="relative w-fit select-wrapper ">

   <div class="flex items-center justify-center bg-stone-300 px-2 py-0.75 text-xs uppercase tracking-widest rounded-[2px] min-w-[60px]">
     <span>{selectedOptions.Size || "Size +"}</span>
   </div>

   <select
    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    aria-label="Select size"
    bind:value={selectedOptions}
    on:focus={() => {
    if (isKeyboardUser) {
      document.querySelector('.select-wrapper')?.classList.add('keyboard-focus');
    }
  }}
    on:blur={() => {
      document.querySelector('.select-wrapper')?.classList.remove('keyboard-focus');
    }}
    on:change={(e) => updateOption("Size", e.target.value)}
    >
     <option disabled selected  value="">
      -
     </option>
    {#each sizeOptions as size}
      {@const available = hasAvailableOption("Size", size)}

      <option
        value={size}
        disabled={!available}
        >
    {size}{!available ? "  Sold Out" : ""}
  </option>
  {/each}

    </select>
  </div>

  <ColorSwatch
    colors={colors}
    selected={selectedOptions.Color}
    onSelect={(c) => updateOption("Color", c)}
    hasAvailableOption={hasAvailableOption}
    size="lg"
  />
</section>

