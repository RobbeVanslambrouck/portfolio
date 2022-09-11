<script>
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
  console.log(categories);
</script>

<section class="skills-page">
  <h2>skills</h2>
  <p>These are the tools/technologies I have used to create web apps</p>
  <div class="categories">
    {#each Object.entries(categories) as [category, skills]}
      <div class="category">
        <p>{category}</p>
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
    height: 100vh;
  }
  h2 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    gap: 3rem;
  }

  .category {
  }

  .skills {
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #fdb827;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
</style>
