<script>
  import { inView } from '../stores';
  import { theme } from '../stores';

  let width = 0;
  let darkThemeToggle = $theme === 'dark';

  $: $theme = darkThemeToggle ? 'dark' : 'light';
  $: isMenuVisible = width >= 500;
</script>

<svelte:window bind:innerWidth={width} />

<header>
  <h1 class="sr-only"><a href="/">Robbe Vanslambrouck</a></h1>
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
    <ul class={isMenuVisible ? 'show-menu' : 'hide-menu'}>
      <li>
        <a
          href="#home"
          class={$inView.find((e) => e === 'hero') ? 'active' : ''}>home</a
        >
      </li>
      <li>
        <a
          href="#about"
          class={$inView.find((e) => e === 'about') ? 'active' : ''}>about</a
        >
      </li>
      <li>
        <a
          href="#skills"
          class={$inView.find((e) => e === 'skills') ? 'active' : ''}>skills</a
        >
      </li>
      <li>
        <a
          href="#projects"
          class={$inView.find((e) => e === 'projects') ? 'active' : ''}
          >projects</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class={$inView.find((e) => e === 'contact') ? 'active' : ''}
          >contact</a
        >
      </li>
      <li class="theme-menu-item">
        <input
          type="checkbox"
          name="theme"
          id="darkmode-toggle"
          bind:checked={darkThemeToggle}
        />
        <label for="darkmode-toggle" />
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

  .theme-menu-item {
    margin: 0 1rem;
    align-self: flex-start;
    position: absolute;
    top: 0;
    left: 0;
  }

  .theme-menu-item label {
    width: 4.4rem;
    height: 2.2rem;
    position: relative;
    display: block;
    border-radius: var(--border-radius);
    box-shadow: inset 0 0.2rem 0.6rem rgba(0, 0, 0, 0.4),
      inset 0 -0.2rem 0.6rem rgba(255, 255, 255, 0.4);
    background-color: var(--surface-glaze);
    cursor: pointer;
    transition: 0.3s;
  }

  .theme-menu-item label:after {
    content: '';
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    background: linear-gradient(180deg, #ffcc88, #d8860b);
    border-radius: 2rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .theme-menu-item input {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  .theme-menu-item input:checked + label:after {
    left: 4.3rem;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #aaa, #6a6a6a);
  }

  .theme-menu-item label:active::after {
    width: 3.2rem;
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
    height: 0;
  }

  a {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--on-primary-container);
    line-height: 4rem;
    transition: 0.6s;
  }

  a:hover {
    color: var(--primary);
    text-decoration: underline;
    transition: 0.3s;
  }

  .active {
    color: var(--primary);
    transition: 0.3s;
  }

  @media only screen and (min-width: 500px) {
    header {
      box-shadow: var(--box-shadow);
      background-color: var(--primary-glaze);
    }

    .theme-menu-item {
      margin: 0 1rem 0 auto;
      align-self: flex-start;
      position: relative;
    }

    nav {
      max-width: 110rem;
      margin: 0 auto;
    }

    nav ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      background: none;
      background-color: none;
      box-shadow: none;
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
