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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem harum amet
    earum optio perspiciatis sed, veniam quam impedit itaque ullam nam assumenda
    nemo tempore dolorem delectus vel enim repudiandae? Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Molestiae itaque asperiores fugiat, natus
    ratione est eveniet eos eaque aliquid minima dolorem, tempore voluptate
    maiores labore facilis molestias debitis voluptas ipsa!
  </JobOffer>
  <JobOffer job="Fryzjer damski">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem harum amet
    earum optio perspiciatis sed, veniam quam impedit itaque ullam nam assumenda
    nemo tempore dolorem delectus vel enim repudiandae? Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Molestiae itaque asperiores fugiat, natus
    ratione est eveniet eos eaque aliquid minima dolorem, tempore voluptate
    maiores labore facilis molestias debitis voluptas ipsa!
  </JobOffer>
  <JobOffer job="Specjalista ds. marketingu">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem harum amet
    earum optio perspiciatis sed, veniam quam impedit itaque ullam nam assumenda
    nemo tempore dolorem delectus vel enim repudiandae? Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Molestiae itaque asperiores fugiat, natus
    ratione est eveniet eos eaque aliquid minima dolorem, tempore voluptate
    maiores labore facilis molestias debitis voluptas ipsa!
  </JobOffer>
  <p class="my-8 text-center text-lg font-semibold lg:text-2xl">
    Zgłoszenia prosimy wysyłać na adres e-mail: <br> maden.kariera@gmail.com
  </p>
</ContentContainer>
