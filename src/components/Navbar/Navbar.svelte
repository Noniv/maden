<script>
  import NavbarLink from "./NavbarLink.svelte";
  let navOpened = false;

  const switchNav = () => {
    navOpened = !navOpened;
  };
</script>

<nav
  class={navOpened
    ? "bg-opacity-90 backdrop-blur-sm z-20 flex flex-col justify-center h-screen fixed inset-0 bg-white lg:flex-row lg:justify-between lg:items-center lg:h-16 lg:px-4"
    : "bg-opacity-90 backdrop-blur-sm z-20 flex justify-between px-4 h-16 bg-white fixed top-0 w-full lg:flex-row lg:items-center"}
>
  <div
    class="left-0 top-0 p-4 text-2xl font-medium fixed lg:static lg:px-0"
  >
    Ma<span class="text-yellow-700">den</span>
  </div>
  <ul
    class={navOpened
      ? "animate-fade-in flex flex-col gap-4 text-center text-xl lg:flex-row lg:text-base lg:gap-6 lg:animate-none xl:text-xl"
      : "hidden lg:flex lg:flex-row lg:gap-6 lg:text-base xl:text-xl"}
  >
    <NavbarLink on:linkClicked={switchNav} text="Strona główna" to="" />
    <NavbarLink on:linkClicked={switchNav} text="Oferta" to="oferta" />
    <NavbarLink on:linkClicked={switchNav} text="Cennik" to="cennik" />
    <NavbarLink on:linkClicked={switchNav} text="Galeria" to="galeria" />
    <NavbarLink on:linkClicked={switchNav} text="Zespół" to="zespol" />
    <NavbarLink on:linkClicked={switchNav} text="Certyfikaty" to="certyfikaty" />
    <NavbarLink on:linkClicked={switchNav} text="Lokalizacja" to="lokalizacja" />
    <NavbarLink on:linkClicked={switchNav} text="Oferty pracy" to="praca" />
    <NavbarLink on:linkClicked={switchNav} text="Kontakt" to="kontakt" />
  </ul>
  <button class="right-0 top-0 p-4 fixed z-20 lg:hidden" on:click={switchNav} aria-label="Przełącz nawigację">
    {#if navOpened}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    {/if}
  </button>
</nav>
