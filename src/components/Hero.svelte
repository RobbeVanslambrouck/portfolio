<script>
  import { inview, addInview, removeInview } from "../stores";
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
</section>

<style>
  section {
    min-height: calc(100vh - 7rem);
  }
</style>
