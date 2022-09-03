<script>
  const tools = [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "Sass" },
    { name: "React" },
    { name: "Svelte" },
    { name: "Webpack" },
    { name: "Vite" },
    { name: "npm" },
    { name: "git" },
    { name: "Figma" },
    { name: "Visual Studio Code" },
    { name: "linux, popOS" },
    { name: "Google" },
  ];
</script>

<section class="skills">
  <h2>skills</h2>
  <p>summary...</p>
  <div>
    <p>tool i've used</p>
    {#each tools as tool}
      <div>
        <p>{tool.name}</p>
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
</style>
