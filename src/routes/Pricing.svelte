<script>
  import ContentContainer from "../components/ContentContainer.svelte";
  import PricingItem from "../components/PricingItem.svelte";
  import Heading from "../components/Heading.svelte";
</script>

<ContentContainer>
  <Heading level="1">Cennik</Heading>
  <Heading level="2" className="mt-8 mb-4 lg:mt-16">Fryzjer damski</Heading>
  <ul>
    <PricingItem service="Strzyżenie grzywki" price="30" />
    <PricingItem service="Strzyżenie dziewczynki" price="60" />
    <PricingItem service="Strzyżenie damskie krótkie włosy" price="70" />
    <PricingItem service="Strzyżenie damskie średnie włosy" price="100" />
    <PricingItem service="Strzyżenie damskie długie włosy" price="120" />
    <PricingItem service="Podcięcie końcówek (bez mycia)" price="70" />
    <PricingItem service="Modelowanie krótkie włosy" price="70" />
    <PricingItem service="Modelowanie średnie włosy" price="80" />
    <PricingItem service="Modelowanie długie włosy" price="100" />
    <PricingItem service="Fryzura okolicznościowa" price="150" />
    <PricingItem service="Upięcia" price="200" />
    <PricingItem service="Fryzura próbna" price="150" />
    <PricingItem service="Fryzura ślubna" price="150" />
    <PricingItem service="Dopinanie tresek" price="100" />
    <PricingItem service="Koloryzacja " price="200" />
    <PricingItem service="Dekoloryzacja " price="200" />
    <PricingItem service="Keratynowe prostowanie włosów" price="600" />
    <PricingItem service="Olejowanie włosów" price="200" />
  </ul>
  <ul>
    <Heading level="2" className="mt-8 mb-4 lg:mt-16">Fryzjer męski</Heading>
    <PricingItem service="Strzyżenie męskie maszynką" price="50" />
    <PricingItem service="Strzyżenie męskie" price="60" />
    <PricingItem service="Strzyżenie męskie długie włosy" price="100" />
    <PricingItem service="Strzyżenie chłopca" price="60" />
    <PricingItem service="Strzyżenie boki" price="50" />
    <PricingItem service="Strzyżenie brody" price="70" />
    <PricingItem service="Strzyżenie brwi" price="15" />
    <PricingItem service="Strzyżenie (wąsy, uszy, nos)" price="15" />
    <PricingItem service="Modelowanie męskie" price="50" />
  </ul>
</ContentContainer>
