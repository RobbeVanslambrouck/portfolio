<script>
  import { inview } from "../stores";
</script>

<header>
  <h1 class="sr-only"><a href="/">robbe vanslambrouck</a></h1>
  <nav>
    <ul>
      <li>
        <a
          href="#home"
          class={$inview.find((e) => e === "hero") ? "active" : ""}>home</a
        >
      </li>
      <li>
        <a
          href="#about"
          class={$inview.find((e) => e === "about") ? "active" : ""}>about</a
        >
      </li>
      <li>
        <a
          href="#skills"
          class={$inview.find((e) => e === "skills") ? "active" : ""}>skills</a
        >
      </li>
      <li>
        <a
          href="#projects"
          class={$inview.find((e) => e === "projects") ? "active" : ""}
          >projects</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class={$inview.find((e) => e === "contact") ? "active" : ""}
          >contact</a
        >
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: #f1f1f1;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
  }

  a {
    display: block;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.8rem;
    color: black;
    border-bottom: 1px solid #fdb827;
    padding: 1rem;
  }

  a:hover {
    color: #21209c;
    text-decoration: underline;
  }

  .active {
    color: #21209c;
  }

  @media only screen and (min-width: 500px) {
    header {
      position: sticky;
      left: 0;
      top: 0;
      box-shadow: 4px 4px 10px 10px #e1e1e1;
    }

    nav ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }

    a {
      display: block;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 1.8rem;
      color: black;
      border-bottom: none;
      padding: 1rem;
    }
  }
</style>
