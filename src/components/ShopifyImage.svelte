<script lang="ts">
  export let image: {
    url: string;
    altText?: string;
    width: number;
    height: number;
  } | null = null;

  export let classList = "";
  export let loading: HTMLImageElement["loading"] = "lazy";
  export let sizes = "100vw";

  export let fetchpriority:
    | "high"
    | "low"
    | "auto"
    | undefined = undefined;

 
  const fallback = "/placeholder.svg";

  const srcSetWidths = [200, 320, 480, 640, 768, 960];

  function formatWebpUrl(baseUrl?: string, width?: number): string {
    if (!baseUrl) return fallback;

    try {
      const url = new URL(baseUrl);

      if (width) {
        url.searchParams.set("width", String(width));
      }

      url.searchParams.set("format", "webp");

      return url.toString();
    } catch {
      return fallback;
    }
  }

  function getMainSrc() {
    return image?.url ? formatWebpUrl(image.url) : fallback;
  }

  function generateSrcSet() {
    if (!image?.url) return "";

    return srcSetWidths
      .filter((w) => w < image.width)
      .map((w) => `${formatWebpUrl(image.url, w)} ${w}w`)
      .concat(`${formatWebpUrl(image.url)} ${image.width}w`)
      .join(", ");
  }
</script>



  <img
    src={getMainSrc()}
    alt={image?.altText || "Product"}
    class={classList}
    width={image?.width}
    height={image?.height}
    loading={loading}
    fetchpriority={fetchpriority}
    sizes={sizes}
    srcset={generateSrcSet()}

  />
