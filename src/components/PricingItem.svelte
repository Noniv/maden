<script>
  export let service;
  export let price;
</script>

<div class="flex justify-between border-b-2 border-dotted border-yellow-700 py-1 lg:py-4 lg:text-xl last-of-type:border-0">
  <div>{service}</div>
  <div class="text-yellow-700">{price} zł</div>
</div>
