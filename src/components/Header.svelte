<script>
  import { inview } from '../stores';

  let width = 0;

  $: isMenuVisible = width >= 500;
</script>

<svelte:window bind:innerWidth={width} />

<header>
  <h1 class="sr-only"><a href="/">robbe vanslambrouck</a></h1>
  <nav>
    {#if width < 500}
      <div id="nav-toggle">
        <label class="sr-only" for="nav-checkbox">show navigation</label>
        <input
          name="nav-checkbox"
          id="nav-checkbox"
          type="checkbox"
          bind:checked={isMenuVisible}
        />
        <span />
        <span />
        <span />
      </div>
    {/if}
    <ul
      class={isMenuVisible ? '' : 'hide-menu'}
      on:click={() => {
        if (width <= 500) {
          isMenuVisible = false;
        }
      }}
    >
      <li>
        <a
          href="#home"
          class={$inview.find((e) => e === 'hero') ? 'active' : ''}>home</a
        >
      </li>
      <li>
        <a
          href="#about"
          class={$inview.find((e) => e === 'about') ? 'active' : ''}>about</a
        >
      </li>
      <li>
        <a
          href="#skills"
          class={$inview.find((e) => e === 'skills') ? 'active' : ''}>skills</a
        >
      </li>
      <li>
        <a
          href="#projects"
          class={$inview.find((e) => e === 'projects') ? 'active' : ''}
          >projects</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class={$inview.find((e) => e === 'contact') ? 'active' : ''}
          >contact</a
        >
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  nav {
    height: 0px;
  }

  #nav-toggle {
    display: block;
    position: fixed;
    top: 1.15rem;
    right: 4.65rem;
    height: 0;
    width: 0;
    z-index: 1;
    user-select: none;
  }

  #nav-checkbox {
    display: block;
    width: 3.5rem;
    height: 3.2rem;
    position: absolute;
    top: -0.8rem;
    left: -0.5rem;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #nav-toggle span {
    display: block;
    width: 3.3rem;
    height: 0.4rem;
    margin: 0;
    margin-bottom: 0.5rem;
    position: relative;

    background: var(--primary);
    border-radius: 0.3rem;

    z-index: 1;

    transform-origin: 0.4rem 0;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #nav-toggle span:first-child {
    transform-origin: 0% 100%;
  }

  #nav-toggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #nav-toggle input:checked ~ span {
    background: var(--on-primary-container);
  }

  #nav-toggle input:checked ~ span:nth-last-child(3) {
    opacity: 1;
    transform: rotate(45deg) translate(0px, -1px);
  }

  #nav-toggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0, 0.1) translate(0, -2px);
  }

  #nav-toggle input:checked ~ span:nth-last-child(1) {
    transform: rotate(-45deg) translate(-1px, -2px);
  }

  nav ul {
    backdrop-filter: blur(1rem);
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: all 0.55s ease;
    background-color: var(--primary-container-glaze);
  }

  nav li {
    height: 4rem;
    border-bottom: 1px solid var(--on-primary-container);
  }

  nav li:last-child {
    border-bottom: none;
  }

  .hide-menu:not(:focus):not(:active) {
    transform: translate(-100%, 0%);
    opacity: 0;
  }

  a {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--on-primary-container);
    line-height: 4rem;
  }

  a:hover {
    color: var(--primary);
    text-decoration: underline;
  }

  .active {
    color: var(--primary);
  }

  @media only screen and (min-width: 500px) {
    header {
      box-shadow: var(--box-shadow);
    }

    nav ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      background-color: var(--primary-glaze);
    }

    nav li {
      height: fit-content;
      border-bottom: none;
    }

    nav li:nth-child(1) {
      margin-top: 0;
    }

    a {
      display: block;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.8rem;
      border-bottom: none;
      padding: 1rem;
      line-height: normal;
      color: var(--on-primary);
    }

    a:hover {
      color: var(--on-background);
    }

    .active {
      color: var(--on-background);
    }
  }
</style>
