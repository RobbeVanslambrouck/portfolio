<script>
  import { handle_promise } from "svelte/internal";

  import projectsJson from "../projects.json";
  console.log(projectsJson.projects);

  let showLivePages = false;
  let innerWidth;
  let iframes = "false";
  $: inputSize = iframes.length === 0 ? 1 : iframes.length;

  $: {
    if (innerWidth < 800) {
      showLivePages = false;
      iframes = "false";
    }
  }

  $: {
    showLivePages = iframes === "true";
  }

  const handleFocusout = () => {
    if (iframes !== "true") iframes = "false";
  };
</script>

<svelte:window bind:innerWidth />
<section class="page" id="projects">
  <h2>
    {"<Projects"}
    {#if innerWidth >= 800}
      &nbsp &nbsp {"iframes ="}
      <input
        name="iframes"
        type="text"
        bind:value={iframes}
        size={inputSize}
        on:focusout={handleFocusout}
      />
    {/if}
    {" />"}
  </h2>
  <div class="projects">
    {#each projectsJson.projects as project}
      <section class="project">
        <h3 class="title">{project.name}</h3>
        <p class="desc">{project.description}</p>
        <div class="links">
          <div class="link">
            <a href={project.liveLink} target="_blank">{"<Demo />"}</a>
          </div>
          <div class="link">
            <a href={project.codeLink} target="_blank">{"<Code />"}</a>
          </div>
        </div>
        {#if showLivePages}
          <iframe
            class="preview"
            src={project.liveLink}
            title={project.name}
            frameborder="0"
          />
        {:else}
          <img
            class="preview"
            src={project.image}
            alt="project {project.name} preview"
          />
        {/if}
      </section>
    {/each}
  </div>
</section>

<style>
  h2 {
    font-weight: 600;
    text-transform: none;
  }

  input {
    border: none;
    font-size: inherit;
    font-weight: inherit;
    margin-right: -3.5rem;
    cursor: pointer;
    background-color: #f1f1f1;
  }

  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  .project {
    display: grid;
    justify-content: center;
    border-radius: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto 1fr;
    gap: 2rem;
    grid-template-areas:
      "img title"
      "img desc"
      "img links";
    padding: 1rem;
    color: #f1f1f1;
    background-color: #21209c;
    box-shadow: 0.1rem 0.4rem 0.4rem #aeaeae;
    max-width: 80rem;
  }

  .project:nth-child(odd) {
    grid-template-areas:
      "title img"
      "desc img"
      "links img";
  }

  .title {
    font-size: 3.5rem;
    font-weight: 600;
    grid-area: title;
    align-self: end;
  }

  .desc {
    font-size: 1.8rem;
    grid-area: desc;
  }

  .links {
    grid-area: links;
    align-self: start;
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 1rem;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdb827;
    box-shadow: 0 0.4rem #7d5b13;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    width: 10rem;
    font-weight: 600;
  }

  .link a {
    color: #21209c;
    text-decoration: none;
    margin: 0.5rem 1rem;
  }

  .link:active {
    box-shadow: 0 0.2rem #7d5b13;
    transform: translate(0.2rem);
  }

  .preview {
    grid-area: img;
    max-width: 100%;
    border-radius: 0.5rem;
  }

  iframe {
    height: 100vh;
    width: 100%;
    background-color: #f1f1f1;
  }

  @media only screen and (max-width: 550px) {
    .project,
    .project:nth-child(odd) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        "title"
        "img"
        "desc"
        "links";
      justify-items: center;
    }
  }
</style>
