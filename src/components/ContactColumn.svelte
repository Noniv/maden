<script>
  import Heading from "./Heading.svelte";
  export let src;
  export let title;
</script>

<div class="mb-6">
  <div class="flex flex-col items-center justify-center mb-2">
    <Heading level="2" className="mt-4 mb-2 lg:text-3xl">{title}</Heading>
    <img {src} alt="" class="w-6 h-6 lg:w-8 lg:h-8" />
  </div>
  <slot />
</div>
