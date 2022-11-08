<script>
  import { inview } from 'svelte-inview';
  import { fade } from 'svelte/transition';
  import Skill from './Skill.svelte';

  export let skills;

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

<div class="view" use:inview={inviewOptions} on:change={handleInviewChange}>
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
    border-radius: 0.5rem;
    padding: 1rem;
    padding-bottom: auto;
    background-color: #fdb927;
    box-shadow: 0.4rem 0.4rem 0.5rem #a1a1a1;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    align-items: center;
  }

  @media only screen and (min-width: 350px) {
    .skills {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
