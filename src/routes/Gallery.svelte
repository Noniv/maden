<script>
  import Heading from "../components/Heading.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
</script>

<ContentContainer>
  <Heading level="1">Galeria</Heading>
  <div
    class="flex flex-col justify-center items-center gap-4 mx-auto md:flex-row md:flex-wrap lg:max-w-4xl"
  >
    <img src="img/photo-1.webp" alt="a" class="md:w-64" />
    <img src="img/photo-2.jpeg" alt="a" class="md:w-64" />
    <img src="img/photo-3.jpeg" alt="a" class="md:w-64" />
  </div></ContentContainer
>
