<script>
  import LinkButton from "../components/LinkButton.svelte";
</script>

<div class="relative h-screen">
  <div
    style="background-image: url(img/hero.webp);"
    class="bg-no-repeat bg-cover bg-center brightness-[35%] absolute inset-0 -z-10"
  />
  <div
    class="text-4xl text-white pt-16 h-full flex flex-col justify-center text-center items-center gap-12 animate-fade-in"
  >
    <h1 class="font-bold text-6xl">
      Ma<span class="text-yellow-700">den</span>
    </h1>
    <div class="font-bold tracking-wider">Wyjątkowe fryzury</div>
    <LinkButton
      href="/#/oferta"
      content="Zobacz ofertę"
      className="animate-bounce-slow"
    />
  </div>
  <div class="absolute left-4 bottom-4 text-white animate-fade-in">
    tel.: +48 123 456 789 <br />
    e-mail: maden@gmail.com
  </div>
</div>
