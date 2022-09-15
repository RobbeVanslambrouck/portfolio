<script>
  import { inview, addInview, removeInview } from "../stores";
  import { onMount, onDestroy } from "svelte";
  import Typewriter from "svelte-typewriter";
  import viewport from "../useViewportAction";

  const handleEnterViewport = () => {
    addInview("hero");
  };
  const handleExitViewport = () => {
    removeInview("hero");
  };
</script>

<section
  class="hero"
  id="home"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2 class="sr-only">hero</h2>
  <Typewriter interval={80} wordInterval={2000} mode="loopRandom" cursor={true}>
    <p>frontend developer</p>
    <p>coder</p>
    <p>I love svelte</p>
  </Typewriter>
</section>

<style>
  section {
    min-height: calc(100vh - 7rem);
  }

  p {
    display: flex;
    font-size: 5rem;
    padding-top: 5rem;
  }
</style>
