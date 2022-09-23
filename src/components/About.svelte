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
  <p>hi, my name is Robbe Vanslambrouck and I am a self taught front-end developer with a passion for learning, functional design and technology</p>
  <p>I am currently available for hire</p>
</section>

<style>

  .page {
    min-height: 40vh;
  }
  p {
    font-size: 1.8rem;
  }
</style>
