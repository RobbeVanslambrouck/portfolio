<script>
  import { inview } from 'svelte-inview';
  import { fade } from 'svelte/transition';
  import Skill from './Skill.svelte';

  export let skills;

  let isInView;
  const inViewOptions = {
    unobserveOnEnter: true,
    rootMargin: '-20%',
  };

  const handleInViewChange = (e) => {
    const { inView } = e.detail;
    isInView = inView;
  };
</script>

<div class="view" use:inview={inViewOptions} on:change={handleInViewChange}>
  {#if isInView}
    <div class="category" in:fade>
      <p class="title"><slot /></p>
      <div class="skills">
        {#each skills as skill}
          <Skill {skill} />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .view {
    display: flex;
    margin: 0 auto;
  }

  .category {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .category .title {
    font-size: 2.2rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  .skills {
    flex: auto;
    border-radius: var(--border-radius);
    padding: 1rem;
    padding-bottom: auto;
    background: var(--surface-1);
    box-shadow: var(--box-shadow);

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    align-items: center;
  }

  .skills:hover {
    background: var(--surface-2);
  }

  @media only screen and (min-width: 350px) {
    .skills {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
