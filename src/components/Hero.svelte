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
      target="_blank"><img src="assets/linkedin-icon.svg" alt="" /></a
    >
    <a
      href="https://github.com/RobbeVanslambrouck"
      target="_blank"
      class="github icon"><img src="assets/github-icon.svg" alt="" /></a
    >
    <a href="mailto:robbevsb.dev@gmail.com" class="gmail icon"
      ><img src="assets/google-gmail.svg" alt="" /></a
    >
  </div>
</section>

<style>
  section {
    min-height: calc(60vh);
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas: "name" "title" "." "icons" ".";
    gap: 1rem;
  }

  h2 {
    margin: 0;
  }

  #name {
    grid-area: name;
    align-self: end;
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  #job-title {
    grid-area: title;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .icons {
    justify-self: center;
    grid-area: icons;
    display: flex;
    gap: 1rem;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    border-radius: 0.5rem;
    background-color: #d1d1d1;
  }

  .icon img {
    width: 4rem;
    object-fit: contain;
    background-color: #d1d1d1;
  }

  .github img {
    border-radius: 50%;
  }

  .icon:hover {
    transform: scale(1.05);
    box-shadow: 0.4rem 0.4rem 0.5rem #a1a1a1;
  }
</style>
