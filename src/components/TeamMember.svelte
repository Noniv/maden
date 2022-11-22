<script>
    export let src = ""
    export let name = ""
    export let id = 0
</script>

<a href={"/#/zespol/" + id} class="border-yellow-700 border-b-[1px] block">
    <img src={src} alt="Fryzjer" class="md:w-64">
    <div class="text-center py-4 text-lg font-semibold">
        {name}
    </div>
</a>