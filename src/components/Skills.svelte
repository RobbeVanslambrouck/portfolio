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
</style>
