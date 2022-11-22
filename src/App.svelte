<script>
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Router from "svelte-spa-router";
  import Certificates from "./routes/Certificates.svelte";
  import Contact from "./routes/Contact.svelte";
  import Gallery from "./routes/Gallery.svelte";
  import Home from "./routes/Home.svelte";
  import Localisation from "./routes/Localisation.svelte";
  import Offer from "./routes/Offer.svelte";
  import Pricing from "./routes/Pricing.svelte";
  import Team from "./routes/Team.svelte";
  import Work from "./routes/Work.svelte";
  import TeamMember from "./routes/TeamMember.svelte";
</script>

<svelte:head>
	<title>Maden - salon fryzjerski</title>
  <meta name="description" content="Maden - salon fryzjerski" />
</svelte:head>

<Navbar />
<Router
  routes={{
    "/": Home,
    "/certyfikaty": Certificates,
    "/kontakt": Contact,
    "/galeria": Gallery,
    "/lokalizacja": Localisation,
    "/oferta": Offer,
    "/cennik": Pricing,
    "/zespol": Team,
    "/zespol/:id": TeamMember,
    "/praca": Work,
  }}
  restoreScrollState={true}
/>
