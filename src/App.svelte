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
  import Reviews from "./routes/Reviews.svelte";
</script>

<svelte:head>
	<title>Maden - salon fryzjerski</title>
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
    "/praca": Work,
    "/opinie": Reviews
  }}
/>
