<script>
  import { addInview, removeInview } from '../stores';
  import viewport from '../useViewportAction';
  import skillsJson from '../skills.json';
  import SkillCategorie from './skillCategorie.svelte';

  let categories = {};
  skillsJson.skills.forEach((skill) => {
    if (categories[skill.category]) {
      categories[skill.category].push(skill);
      return;
    }
    categories[skill.category] = [skill];
  });

  const handleEnterViewport = () => {
    addInview('skills');
  };
  const handleExitViewport = () => {
    removeInview('skills');
  };
</script>

<section
  class="skills-page"
  id="skills"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2>{'<skills />'}</h2>
  <div class="categories">
    {#each Object.entries(categories) as [category, skills]}
      <SkillCategorie {skills}>{category}</SkillCategorie>
    {/each}
  </div>
</section>

<style>
  section {
    min-height: 80vh;
    max-width: 80rem;
    margin: 0 auto;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 3rem;
  }

  .category {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    background-color: #fdb827;
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
