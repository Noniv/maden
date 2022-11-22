<script>
  import LinkButton from "../components/LinkButton.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import Heading from "../components/Heading.svelte";
</script>

<ContentContainer>
  <Heading level="1">Oferta</Heading>
  <p class="mb-3 lg:text-xl lg:mb-6">
    Zachęcamy do zapoznania się z szeroką gamą usług fryzjerskich dla kobiet,
    mężczyzn i dzieci świadczonych w naszej salonie fryzjerskim MaDen.
  </p>
  <p class="mb-3 lg:text-xl lg:mb-6">
    Sposób, w jaki jesteśmy uczesani wpływa na nasze dobre samopoczucie.
    Odpowiednio ułożone włosy, o właściwej długości, a także barwie potrafią
    korzystnie zmienić nasz wygląd – odejmując lub dodając lat, a nawet
    korygując twarz. Wiedzą to doskonale zatrudniani przez nasz salon
    specjaliści od fryzur damskich, męskich oraz dziecięcych.
  </p>
  <p class="mb-3 lg:text-xl lg:mb-6">
    W naszej ofercie znajdą Państwo kompleksowy pakiet usług fryzjerskich, które
    stanowią odpowiedź na wszelkie potrzeby Państwa włosów. Wykorzystujemy
    jedynie sprawdzone preparaty do pielęgnacji. Stosujemy wyłącznie wysokiej
    jakości produkty, dzięki którym włosy nabierają blasku i odzyskują
    witalność.
  </p>
  <p class="mb-3 lg:text-xl lg:mb-6">
    Wykonujemy zarówno fryzury okolicznościowe, jak i codzienne. Do potrzeb
    każdego Klienta indywidualnie dopasowujemy rodzaj zabiegu, styl fryzury, typ
    preparatów oraz właściwe narzędzia.
  </p>
  <div class="flex flex-col items-center mt-4 gap-4 lg:flex-row lg:justify-between">
    <LinkButton href="/#/cennik" content="Cennik usług"/>
    <LinkButton href="/#/zespol" content="Nasz zespół"/>
  </div>

</ContentContainer>
