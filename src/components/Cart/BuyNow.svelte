<script >
  import { onMount, tick } from "svelte";
  import { buyNow } from "@lib/cartActions";
  import { isCompletelySoldOut, getFirstAvailableVariant } from "@utils/product";

  export let product;

 let isVisible = false;

  const soldOut = isCompletelySoldOut(product.variants);
  const variant = getFirstAvailableVariant(product.variants);
  const variantId = variant?.id;

  const handleBuy = () => {
    if (!variantId) return;
    buyNow(variantId);
  };



onMount(async () => {
  await tick();

  const media = document.querySelector("[data-media]");
  if (!media) return;

  const observer = new IntersectionObserver(([entry]) => {
    isVisible = !entry.isIntersecting;
  }, {
    threshold: 0.6,
  });

  observer.observe(media);

  return () => observer.disconnect();
});
</script>
<div class=" px-6 ">
  
  <button
    disabled={!variantId}
    on:click={handleBuy}
    class={`w-full flex items-center justify-between px-2 py-3
    bg-white/90 backdrop-blur-md border border-black/10
    text-[10px] uppercase tracking-wider
    transition-all duration-300
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
    `}
  >
    <div class="flex flex-col leading-none text-left">
      <span>{product.title}</span>
      <span class="opacity-60">{soldOut ? "Sold Out" : "Available"}</span>
    </div>
  
    <div class="font-medium tracking-widest">
      {soldOut ? "—" : "BUY"}
    </div>
  </button>
</div>