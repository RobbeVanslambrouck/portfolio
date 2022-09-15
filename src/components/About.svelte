<script>
  import { inview, addInview, removeInview } from "../stores";
  import viewport from "../useViewportAction";

  const handleEnterViewport = () => {
    addInview("about");
  };
  const handleExitViewport = () => {
    removeInview("about");
  };
</script>

<section
  class="about page"
  id="about"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2>about me</h2>
  <p>summary</p>
</section>

<style>
  p {
    font-size: 1.8rem;
  }
</style>
