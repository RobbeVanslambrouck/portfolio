<script>
  import { inview } from 'svelte-inview';
  import { fade } from 'svelte/transition';
  import ImageOverlay from './ImageOverlay.svelte';
  import skillsJson from '../skills.json';
  import Skill from './Skill.svelte';
  export let live;
  export let project;
  export let mirrorContent = false;

  let projectClasses = mirrorContent ? 'project mirror' : 'project';

  let skills = skillsJson.skills.filter((skill) => {
    if (project.skills) {
      return project.skills.includes(skill.name);
    }
    return false;
  });

  // fade in effect
  let isInView;
  const inviewOptions = {
    unobserveOnEnter: true,
    rootMargin: '-20%',
  };
  const handleInviewChange = (e) => {
    const { inView } = e.detail;
    isInView = inView;
  };
</script>

<div use:inview={inviewOptions} on:change={handleInviewChange}>
  {#if isInView}
    <section class={projectClasses} in:fade>
      <h3 class="title">{project.name}</h3>
      <p class="desc">{project.description}</p>
      <div class="links">
        <div class="link">
          <a href={project.liveLink} target="_blank">{'<Demo />'}</a>
        </div>
        <div class="link">
          <a href={project.codeLink} target="_blank">{'<Code />'}</a>
        </div>
      </div>
      {#if live}
        <iframe src={project.liveLink} title={project.name} frameborder="0" />
      {:else}
        <div class="preview">
          <ImageOverlay
            src={project.image}
            alt="project {project.name} preview"
          >
            <div class="overlay">
              {#each skills as skill}
                <Skill {skill} />
              {/each}
            </div>
          </ImageOverlay>
        </div>
      {/if}
    </section>
  {/if}
</div>

<style>
  .overlay {
    position: absolute;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .project {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    border-radius: var(--border-radius);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto 1fr;
    gap: 2rem;
    grid-template-areas:
      'img title'
      'img desc'
      'img links';
    padding: 1rem;
    color: var(--on-surface-variant);
    background-color: var(--surface-variant);
    box-shadow: var(--box-shadow);
    max-width: 80rem;
    transition: 0.3s;
  }

  .project:hover {
    background-color: var(--primary-container);
    color: var(--on-primary-container);
    transition: 0.3s;
  }

  .project:hover .link {
    background-color: var(--primary);
    transition: 0.3s;
  }

  .project:hover .link:hover {
    background-color: var(--on-primary-container);
    transition: 0.6s;
  }

  .mirror {
    grid-template-areas:
      'title img'
      'desc img'
      'links img';
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
    background-color: var(--primary-glaze);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    font-size: 1.8rem;
    width: 10rem;
    font-weight: 600;
    transition: 0.3s;
  }

  .link a {
    color: var(--on-primary);
    text-decoration: none;
    padding: 1rem;
    transition: 0.3s;
  }

  .preview {
    grid-area: img;
    max-width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
  }

  iframe {
    grid-area: img;
    height: 100vh;
    width: 100%;
    background-color: #f1f1f1;
    border-radius: var(--border-radius);
  }

  @media only screen and (max-width: 550px) {
    .project,
    .mirror {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      grid-template-areas:
        'title'
        'img'
        'desc'
        'links';
      justify-items: center;
    }
  }
</style>
