<script>
  import { fade } from "svelte/transition";

  export let skill;
  let isHovered = false;
  let x, y;
  let scrollX, scrollY;
  let handleMouseOver = () => {
    isHovered = true;
  };

  let handleMouseLeave = () => {
    isHovered = false;
  };

  let handleMouseMove = (e) => {
    x = e.clientX + scrollX + 5;
    y = e.clientY + scrollY + 5;
  };
</script>

<svelte:window bind:scrollX bind:scrollY />
{#if skill.tooltip !== ""}
  <div
    class="skill"
    on:mouseover={handleMouseOver}
    on:focus={handleMouseOver}
    on:mouseleave={handleMouseLeave}
    on:mousemove={handleMouseMove}
  >
    <a href={skill.link} target="_blank">
      <img src={skill.icon} alt={skill.name} />
    </a>
    <p>{skill.name}</p>
    {#if isHovered}
      <p
        class="tooltip"
        style="top: {y}px; left: {x}px"
        in:fade={{ delay: 500, duration: 500 }}
        out:fade={{ duration: 500 }}
      >
        {skill.tooltip}
      </p>
    {/if}
  </div>
{:else}
  <div class="skill">
    <a href={skill.link} target="_blank">
      <img src={skill.icon} alt={skill.name} />
    </a>
    <p>{skill.name}</p>
  </div>
{/if}

<style>
  .skill {
    width: 5rem;
    background-color: #f1f1f1;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  .skill img {
    width: 5rem;
    height: 5rem;
  }

  .skill p {
    text-transform: capitalize;
    text-align: center;
  }

  .tooltip {
    position: absolute;
    background-color: #21209c;
    color: #f1f1f1;
    border-radius: 0.2rem;
    padding: 0.5rem;
    z-index: 1;
    text-transform: none !important;
  }
</style>
