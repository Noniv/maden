<script>
  import TeamMember from "../components/TeamMember.svelte";
  import ContentContainer from "../components/ContentContainer.svelte";
  import Heading from "../components/Heading.svelte";
  import teamMembers from "../data/team-members.json";
</script>

<ContentContainer>
  <Heading level="1">Zespół</Heading>
  <div
    class="flex flex-col justify-center items-center gap-x-4 gap-y-12 mx-auto md:flex-row md:flex-wrap lg:max-w-4xl"
  >
    {#each teamMembers as member (member.id)}
      <TeamMember
        src={"img/" + member.image}
        name={member.name}
        id={member.id}
      />
    {/each}
  </div>
</ContentContainer>
