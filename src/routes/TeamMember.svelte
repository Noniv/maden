<script>
  export let params = {};
  import LinkButton from "../components/LinkButton.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import Heading from "../components/Heading.svelte";
  import teamMembers from "../data/team-members.json";

  let member = teamMembers.find((el) => el.id == params.id);
</script>

<ContentContainer>
  <Heading level="1">{member.name}</Heading>
  <div class="flex flex-col items-center gap-4 text-lg lg:flex-row lg:items-stretch">
    <img src={"img/" + member.image} alt="Fryzjer" class="w-64" />
    <div class="flex flex-col justify-between">
      <p>{member.description}</p>
      <div>
        <h2 class="mt-4">Umiejętności:</h2>
        <ul class="list-disc pl-5">
          {#each member.services as service, i (i)}
            <li>{service}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
<LinkButton href="/#/zespol" content="Reszta zespołu" className="mx-auto mt-8"/>
</ContentContainer>
