<script>
  import { inview, addInview, removeInview } from "../stores";
  import viewport from "../useViewportAction";
  import skillsJson from "../skills.json";
  import Skill from "./Skill.svelte";
  let categories = {};
  skillsJson.skills.forEach((skill) => {
    if (categories[skill.category]) {
      categories[skill.category].push(skill);
      return;
    }
    categories[skill.category] = [skill];
  });

  const handleEnterViewport = () => {
    addInview("skills");
  };
  const handleExitViewport = () => {
    removeInview("skills");
  };
</script>

<section
  class="skills-page"
  id="skills"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2>skills</h2>
  <div class="categories">
    {#each Object.entries(categories) as [category, skills]}
      <div class="category">
        <p class="title">{category}</p>
        <div class="skills">
          {#each skills as skill}
            <Skill {skill} />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    min-height: 80vh;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }

  .category .title {
    font-size: 2.2rem;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .skills {
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #fdb827;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 350px) {
    .skills {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
