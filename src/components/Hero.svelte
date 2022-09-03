<script>
  import { onMount, onDestroy } from "svelte";
  import Typewriter from "svelte-typewriter";
</script>

<section class="hero">
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
