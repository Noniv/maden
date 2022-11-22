<script>
  export let className = "";
  export let href = "";
  export let content = "";
</script>

<a
  {href}
  class={"text-white bg-yellow-700 py-3 px-6 block w-fit rounded-full text-2xl hover:bg-yellow-800 " +
    className}
>
  {content}
</a>
