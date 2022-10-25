<script>
  export let to;
  export let text;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("linkClicked");
  }
</script>

<li class="hover:text-orange-400">
  <a href={"/#/" + to} on:click={handleClick}>{text}</a>
</li>
