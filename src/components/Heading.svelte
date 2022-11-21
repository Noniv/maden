<script>
  export let level;
  export let className = "";
</script>

{#if level === "1"}
  <h1
    class={"text-center text-2xl font-semibold w-fit mx-auto mb-6 lg:text-3xl after:content-[''] after:h-[3px] after:w-3/5 after:bg-yellow-700 after:block after:mx-auto after:my-3 " +
      className}
  >
    <slot />
  </h1>
{:else if level === "2"}
  <h2
    class={"text-center text-xl font-semibold w-fit mx-auto lg:text-2xl " +
      className}
  >
    <slot />
  </h2>
{/if}
