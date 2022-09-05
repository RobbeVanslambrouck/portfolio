<script>
  import skillsJson from "../skills.json";
  import Skill from "./Skill.svelte";
  skillsJson.skills;
</script>

<section class="skills-page">
  <h2>skills</h2>
  <p>These are the tools/technologies I have used to create web apps</p>
  <div class="skills">
    {#each skillsJson.skills as skill}
      <Skill {skill} />
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

  .skills {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 3rem;
  }

  .skill {
    width: 5rem;
  }

  .skill img {
    width: 5rem;
    height: 5rem;
  }

  .skill p {
    text-transform: capitalize;
    text-align: center;
  }

  .skill:before {
    content: attr(data-hover);
    visibility: hidden;
    opacity: 0;
    /* width: max-content; */
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
    /* transition: opacity 1s ease-in-out; */
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }

  .skill:hover:before {
    opacity: 1;
    visibility: visible;
  }
</style>
