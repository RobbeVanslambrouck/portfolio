<script>
  import { fade } from 'svelte/transition';

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
    let rect = e.target.getBoundingClientRect();
    x = e.clientX - rect.left + 8;
    y = e.clientY - rect.top - rect.height + 8;
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
  {#if skill.link === ''}
    <div>
      <img src={skill.icon} alt={skill.name} />
    </div>
  {:else}
    <a href={skill.link} target="_blank">
      <img src={skill.icon} alt={skill.name} />
    </a>
  {/if}
  {#if isHovered}
    <div class="tooltip-container">
      <p
        class="tooltip"
        style="top: {y}px; left: {x}px"
        in:fade={{ delay: 500, duration: 500 }}
        out:fade={{ duration: 500 }}
      >
        {#if skill.tooltip !== ''}
          {skill.tooltip}
        {:else}
          {skill.name}
        {/if}
      </p>
    </div>
  {/if}
</div>

<style>
  .skill {
    background: var(--surface-3);
    box-shadow: var(--box-shadow);
    padding: 0.5rem;
    border-radius: var(--border-radius);
    height: auto;
  }

  .skill img {
    width: 5rem;
    height: 5rem;
    transition: all 1s;
    border-radius: var(--border-radius);
  }

  .skill p {
    text-transform: capitalize;
    text-align: center;
  }

  .skill:hover {
    background-color: var(--custom-color-1-container-glaze);
    transform: scale(1.05);
  }

  .tooltip-container {
    position: relative;
    width: 0;
    height: 0;
  }

  .tooltip {
    position: absolute;
    background-color: var(--custom-color-1-container-glaze);
    backdrop-filter: blur(0.2rem);
    color: var(--on-custom-color-1-container);
    border-radius: var(--border-radius);
    padding: 1rem;
    z-index: 1;
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media only screen and (min-width: 800px) {
    .skill img {
      width: 7rem;
      height: 7rem;
      transition: all 1s;
    }
  }
</style>
