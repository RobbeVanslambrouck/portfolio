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
  <p id="name">Robbe Vanslambrouck</p>
  <p id="job-title">front end developer</p>

  <div class="icons">
    <a
      href="https://www.linkedin.com/in/robbe-vanslambrouck-281734242/"
      class="linkedin icon"
      target="_blank"><p class="sr-only">LinkedIn</p></a
    >
    <a
      href="https://github.com/RobbeVanslambrouck"
      target="_blank"
      class="github icon"><p class="sr-only">github</p></a
    >
    <a href="mailto:robbevsb.dev@gmail.com" class="gmail"
    ><p class="sr-only">robbevsb.dev@gmail.com</p></a>
  </div>
</section>

<style>
  section {
    min-height: calc(100vh - 7rem);
  }

  .icons {
    display: flex;
    gap: 1rem;
  }

  .icon {
    width: 5rem;
    height: 5rem;
    background-color: #fdb827;
    border-radius: 0.5rem;
  }

  .gmail {
    background: url("/assets/Gmail-icon.svg");
    background-size: 5rem 5rem;
  }

  .linkedin {
    background: url("/assets/linkedin-icon.svg");
    background-size: 5rem;
  }

  .github {
    background: url("/assets/github-icon.svg");
    background-size: 5rem;
  }
</style>
