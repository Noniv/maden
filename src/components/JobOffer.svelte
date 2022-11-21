<script>
  import Heading from "./Heading.svelte";
  export let job;
</script>

<div class="border-2 border-yellow-700 rounded-xl shadow-md p-4 my-4 lg:my-8">
  <Heading level="2" className="ml-0">{job}</Heading>
  <p class="my-2">
    <slot />
  </p>
</div>
