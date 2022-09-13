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
    x = e.clientX + scrollX + 8;
    y = e.clientY + scrollY + 8;
  };
</script>

<svelte:window bind:scrollX bind:scrollY />
<div
  class="skill"
  on:mouseover={handleMouseOver}
  on:focus={handleMouseOver}
  on:mouseleave={handleMouseLeave}
  on:mousemove={handleMouseMove}
>
  {#if skill.link === ""}
    <div>
      <img src={skill.icon} alt={skill.name} />
    </div>
  {:else}
    <a href={skill.link} target="_blank">
      <img src={skill.icon} alt={skill.name} />
    </a>
  {/if}
  {#if isHovered}
    <p
      class="tooltip"
      style="top: {y}px; left: {x}px"
      in:fade={{ delay: 500, duration: 500 }}
      out:fade={{ duration: 500 }}
    >
      {#if skill.tooltip !== ""}
        {skill.tooltip}
      {:else}
        {skill.name}
      {/if}
    </p>
  {/if}
</div>

<style>
  .skill {
    background-color: #f1f1f1;
    padding: 0.5rem;
    border-radius: 0.5rem;
    height: auto;
  }

  .skill img {
    width: 5rem;
    height: 5rem;
    transition: all 1s;
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

  @media only screen and (min-width: 800px) {
    .skill img {
      width: 7rem;
      height: 7rem;
      transition: all 1s;
    }
  }
</style>
