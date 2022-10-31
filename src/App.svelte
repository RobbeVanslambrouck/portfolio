<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";

  import { fade } from "svelte/transition";

  let scrollY;
  let innerHeight;

  const scrollToTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<svelte:window bind:scrollY bind:innerHeight />
<Header />
<main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
</main>
{#if scrollY > innerHeight / 2}
  <button
    class="scroll-to-top"
    on:click={scrollToTop}
    transition:fade={{ duration: 300 }}
  >
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 330 330"
      style="enable-background:new 0 0 330 330;"
      xml:space="preserve"
    >
      <path
        id="XMLID_224_"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        fill="#21209C"
      />
    </svg>
    <p class="sr-only">scroll to top</p>
  </button>
{/if}
<Footer />

<style>
  main {
    min-height: calc(100vh - 5rem - 7rem);
    margin: 0 5%;
  }

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    background-color: #fdb827;
    box-shadow: 0rem 0.2rem #7d5b13;

    border: none;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 1000;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .scroll-to-top:hover {
    background-color: #f2ff40;
    box-shadow: 0 0.2rem 4rem #f2ff40, 0rem 0.4rem #7d5b13;
  }

  .scroll-to-top svg {
    height: 3rem;
    width: 3rem;
  }
</style>
