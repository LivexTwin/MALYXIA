<script>
  let dialog;
  let openBtn;
  let open = false;

  const openDialog = () => {
    open = true;
    dialog?.showModal();
  };

  const closeDialog = () => {
    open = false;
    dialog?.close();
    openBtn?.blur();
  };

  const handleOutsideClick = (e) => {
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();

    const isInside =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;

    if (!isInside) closeDialog();
  };
</script>

<!-- trigger -->
<button bind:this={openBtn} on:click={openDialog} id="size-guide-trigger" class="uppercase text-xs">
  Size Guide
</button>

<!-- dialog -->
<dialog
  bind:this={dialog}
  id="size-guide"
  class="w-[92vw] max-w-3xl max-h-[85vh] overflow-auto p-0 border border-black bg-white"
  on:cancel|preventDefault={closeDialog}
  on:click={handleOutsideClick}
  on:close={closeDialog}
  tabindex="-1"
>
  <div class="p-0">
  <svg
                  viewBox="0 0 900 220"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-full h-auto block"
                  text-rendering="geometricPrecision"
                >
                  <!-- background -->
                  <rect x="0" y="0" width="900" height="220" fill="#fff"></rect>

                  <!-- outer border -->
                  <rect
                    x="1"
                    y="1"
                    width="898"
                    height="218"
                    fill="none"
                    stroke="#000"
                    stroke-width="1"></rect>

                  <!-- vertical grid -->
                  <line
                    x1="255"
                    y1="0"
                    x2="255"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="362.5"
                    y1="0"
                    x2="362.5"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="470"
                    y1="0"
                    x2="470"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="577.5"
                    y1="0"
                    x2="577.5"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="685"
                    y1="0"
                    x2="685"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="792.5"
                    y1="0"
                    x2="792.5"
                    y2="220"
                    stroke="#000"
                    stroke-width="1"></line>

                  <!-- horizontal grid -->
                  <line
                    x1="0"
                    y1="85"
                    x2="900"
                    y2="85"
                    stroke="#000"
                    stroke-width="1"></line>
                  <line
                    x1="0"
                    y1="140"
                    x2="900"
                    y2="140"
                    stroke="#000"
                    stroke-width="1"></line>

                  <!-- text -->
                  <g
                    fill="#000"
                    font-family="inherit, Arial, sans-serif"
                    font-size="12"
                    letter-spacing="1"
                  >
                    <!-- headers -->
                    <text x="18" y="50" font-weight="700">MEASUREMENT</text>
                    <text x="300" y="50" font-weight="700">XS</text>
                    <text x="407.5" y="50" font-weight="700">S</text>
                    <text x="515" y="50" font-weight="700">M</text>
                    <text x="622.5" y="50" font-weight="700">L</text>
                    <text x="730" y="50" font-weight="700">XL</text>
                    <text x="837.5" y="50" font-weight="700">2XL</text>

                    <!-- labels -->
                    <text x="18" y="115">BODY WIDTH (CM)</text>
                    <text x="18" y="175">BODY LENGTH (CM)</text>

                    <!-- values row 1 -->
                    <text x="300" y="115">47</text>
                    <text x="407.5" y="115">51</text>
                    <text x="515" y="115">55</text>
                    <text x="622.5" y="115">59</text>
                    <text x="730" y="115">63</text>
                    <text x="837.5" y="115">67</text>

                    <!-- values row 2 -->
                    <text x="300" y="175">68</text>
                    <text x="407.5" y="175">70.5</text>
                    <text x="515" y="175">74</text>
                    <text x="622.5" y="175">77.5</text>
                    <text x="730" y="175">81</text>
                    <text x="837.5" y="175">84.5</text>
                  </g>
                </svg>
  </div>
</dialog>

<style>
  dialog {
    margin: auto;
    background: white;
  }

  dialog:focus {
  outline: none;
}

  dialog::backdrop {
    background: rgba(255, 255, 255, 0.765);
  }


</style>