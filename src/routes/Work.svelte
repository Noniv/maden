<script>
  import JobOffer from "../components/JobOffer.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import Heading from "../components/Heading.svelte";
</script>

<ContentContainer>
  <Heading level="1">Oferty pracy</Heading>
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Zapraszamy do współpracy!
  </p>
  <JobOffer job="Fryzjer męski">
    Oferujemy bardzo atrakcyjny system wynagrodzenia, możliwość szkoleń i
    stałego rozwoju z zakresu koloryzacji, strzyżeń, upięć oraz przemiłą
    atmosfera w zgranym i pomocnym zespole. Oczekujemy doświadczenia w zawodzie,
    pozytywnego nastawienia i chęci do pracy, nienagannej kultury osobistej,
    punktualności, zaangażowania i chęci budowania relacji z klientami oraz
    umiejętności pracy w zespole.
  </JobOffer>
  <JobOffer job="Fryzjer damski">
    Oferujemy bardzo atrakcyjny system wynagrodzenia, możliwość szkoleń i
    stałego rozwoju z zakresu koloryzacji, strzyżeń, upięć oraz przemiłą
    atmosfera w zgranym i pomocnym zespole. Oczekujemy doświadczenia w zawodzie,
    pozytywnego nastawienia i chęci do pracy, nienagannej kultury osobistej,
    punktualności, zaangażowania i chęci budowania relacji z klientami oraz
    umiejętności pracy w zespole.
  </JobOffer>
  <JobOffer job="Specjalista ds. marketingu">
    W związku z dynamicznym rozwojem salonu, poszukujemy osoby na stanowisko
    Specjalisty/ki ds. Marketingu. Jeżeli jesteś charyzmatyczny/a, ambitny/a i
    proaktywny/a w działaniu, posiadasz doświadczenie w prowadzeniu
    internetowych kampanii marketingowych i masz poczucie estetyki oraz
    rozumiesz potrzeby klientów, to idealnie sprawdzisz się w tej pracy.
  </JobOffer>
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Zgłoszenia prosimy wysyłać na adres e-mail: <br /> maden.kariera@gmail.com
  </p>
</ContentContainer>
