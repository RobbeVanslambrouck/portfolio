<script>
  import { addInView, removeInView } from '../stores';
  import viewport from '../useViewportAction';
  import skillsJson from '../skills.json';
  import SkillCategorie from './skillCategorie.svelte';

  let categories = {};
  skillsJson.skills.forEach((skill) => {
    if (skill.category === 'none') return;
    if (categories[skill.category]) {
      categories[skill.category].push(skill);
      return;
    }
    categories[skill.category] = [skill];
  });

  const handleEnterViewport = () => {
    addInView('skills');
  };
  const handleExitViewport = () => {
    removeInView('skills');
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
    max-width: 80rem;
    margin: 0 auto;
    padding-bottom: 10rem;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 3rem;
  }
</style>
