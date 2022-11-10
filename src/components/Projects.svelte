<script>
  import Project from './Project.svelte';

  import viewport from '../useViewportAction';
  import { addInview, removeInview } from '../stores';
  import projectsJson from '../projects.json';

  let live = false;
  let innerWidth;
  let iframes = 'false';
  let oddProject = true;
  const toggle = () => {
    oddProject = !oddProject;
  };
  $: inputSize = iframes.length === 0 ? 1 : iframes.length;

  $: {
    if (innerWidth < 800) {
      live = false;
      iframes = 'false';
    }
  }

  $: {
    live = iframes === 'true';
  }

  const handleFocusout = () => {
    if (iframes !== 'true') iframes = 'false';
  };

  const handleEnterViewport = () => {
    addInview('projects');
  };
  const handleExitViewport = () => {
    removeInview('projects');
  };
</script>

<svelte:window bind:innerWidth />
<section
  class="page"
  id="projects"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2>
    {'<Projects'}
    {#if innerWidth >= 800}
      &nbsp &nbsp {'iframes ='}
      <input
        name="iframes"
        type="text"
        bind:value={iframes}
        size={inputSize}
        on:focusout={handleFocusout}
      />
    {/if}
    {' />'}
  </h2>
  <div class="projects">
    {#each projectsJson.projects as project, index}
      <Project {project} {live} mirrorContent={index % 2 === 1} />
    {/each}
  </div>
</section>

<style>
  .page {
    max-width: 80rem;
    margin: 0 auto;
  }
  h2 {
    font-weight: 600;
    text-transform: none;
  }

  input {
    border: none;
    border-radius: var(--border-radius);
    font-size: inherit;
    font-weight: inherit;
    margin-right: -3.5rem;
    cursor: pointer;
    background-color: var(--custom-color-1-container-glaze);
    color: var(--on-custom-color-1-container);
  }

  .projects {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4rem;
  }
</style>
