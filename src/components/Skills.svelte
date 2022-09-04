<script>
  import html5 from "../assets/html-5.svg";
  import css3 from "../assets/css-3.svg";
  import js from "../assets/javascript.svg";
  import sass from "../assets/sass.svg";
  import react from "../assets/react.svg";
  import svelte from "../assets/svelte-icon.svg";
  import wp from "../assets/webpack.svg";
  import vite from "../assets/vitejs.svg";
  import npm from "../assets/npm-icon.svg";
  import git from "../assets/git-icon.svg";
  import fig from "../assets/figma.svg";
  import vsc from "../assets/visual-studio-code.svg";
  import linux from "../assets/linux-tux.svg";
  import gg from "../assets/google-icon.svg";
  import so from "../assets/stackoverflow-icon.svg";

  const tools = [
    { name: "HTML5", iconUrl: html5 },
    { name: "CSS3", iconUrl: css3 },
    { name: "JavaScript", iconUrl: js },
    { name: "Sass", iconUrl: sass },
    { name: "React", iconUrl: react },
    { name: "Svelte", iconUrl: svelte },
    { name: "Webpack", iconUrl: wp },
    { name: "Vite", iconUrl: vite },
    { name: "npm", iconUrl: npm },
    { name: "git", iconUrl: git },
    { name: "Figma", iconUrl: fig },
    { name: "Visual Studio Code", iconUrl: vsc },
    { name: "linux", iconUrl: linux },
    { name: "Google", iconUrl: gg },
    { name: "Stack Overflow", iconUrl: so },
  ];
</script>

<section class="skills">
  <h2>skills</h2>
  <p>summary...</p>
  <p>tool i've used</p>
  <div class="tools">
    {#each tools as tool}
      <div class="tool">
        <img src={tool.iconUrl} alt={tool.name} />
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

  .tools {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 3rem;
  }

  .tool {
    width: 5rem;
  }

  .tool img {
    width: 5rem;
    height: 5rem;
  }

  .tool p {
    text-transform: capitalize;
    text-align: center;
  }
</style>
