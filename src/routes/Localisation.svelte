<script>
  import ContentContainer from "../components/ContentContainer.svelte";
  import Heading from "../components/Heading.svelte";
</script>

<ContentContainer>
  <Heading level="1">Lokalizacja</Heading>
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Salon Fryzjerski "Maden"<br />
    ul. Wincentego Pola 2 <br />
    35-021 Rzeszów
  </p>
  <iframe
    title="google maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.1651172826587!2d21.982832515716094!3d50.027001779419145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbaefe222183%3A0x6a590633671c25c4!2sWydzia%C5%82%20Elektrotechniki%20i%20Informatyki%20Politechniki%20Rzeszowskiej!5e0!3m2!1spl!2spl!4v1666886948765!5m2!1spl!2spl"
    width="600"
    height="450"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="w-full"
  />
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Salon czynny od poniedziałku do soboty w godzinach 8:00-16:00. <br>
  </p>
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Zapraszamy!
  </p>
</ContentContainer>
