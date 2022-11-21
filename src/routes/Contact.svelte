<script>
  import Heading from "../components/Heading.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import ContactColumn from "../components/ContactColumn.svelte";
</script>

<ContentContainer className="h-screen">
  <div class="flex flex-col h-full md:text-xl md:justify-between">
    <Heading level="1">Kontakt</Heading>
    <p class="text-center text-lg font-semibold lg:text-2xl">
      Chesz umówić wizytę lub masz jakieś pytanie? <br />Zapraszamy do kontaktu!
    </p>
    <div class="pb-16 flex flex-col md:justify-center">
      <div class="flex flex-col text-center justify-between md:flex-row">
        <ContactColumn src="img/house.svg" title="Stacjonarnie">
          Salon Fryzjerski "Maden"<br />
          ul. Wincentego Pola 2 <br />
          35-021 Rzeszów</ContactColumn
        >
        <ContactColumn src="img/phone.svg" title="Telefonicznie"
          >+48 123 456 789</ContactColumn
        >
        <ContactColumn src="img/email.svg" title="Mailowo"
          >maden@gmail.com</ContactColumn
        >
      </div>
    </div>
  </div>
</ContentContainer>
