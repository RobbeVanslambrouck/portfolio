<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Skills from './components/Skills.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';

  import { fade } from 'svelte/transition';
  import { get } from 'svelte/store';
  import { theme } from './stores';
  import { onDestroy, onMount } from 'svelte';

  let scrollY;
  let innerHeight;

  let activeTheme = get(theme);
  let unsubscribe = theme.subscribe((value) => {
    window.document.body.classList.toggle(activeTheme);
    activeTheme = value;
    window.document.body.classList.toggle(activeTheme);
  });

  onMount(() => {
    $theme = 'light';
  });

  onDestroy(unsubscribe);

  const scrollToTop = () => {
    scrollTo({ top: 0, behavior: 'smooth' });
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
    <p class="sr-only">scroll to top</p>
    <i class="arrow" />
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
    width: 6rem;
    height: 6rem;
    line-height: 4rem;
    background-color: var(--custom-color-1-container-glaze);
    box-shadow: var(--box-shadow);
    backdrop-filter: blur(0.5rem);

    border: none;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 1000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
  }

  .scroll-to-top:hover {
    background-color: var(--custom-color-1-glaze);
    transition: 0.3s;
  }

  .arrow {
    border: solid var(--on-custom-color-1-container);
    border-width: 0 0.8rem 0.8rem 0;
    border-radius: 0.5rem;
    display: inline-block;
    padding: 1rem;
    transform: rotate(-135deg) translate(-0.4rem, -0.4rem);
  }
</style>
