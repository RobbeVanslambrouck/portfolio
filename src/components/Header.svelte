<script>
</script>

<header>
  <h1 class="sr-only"><a href="/">robbe vanslambrouck</a></h1>
  <nav>
    <ul>
      <li><a href="#home">home</a></li>
      <li><a href="#about">about</a></li>
      <li><a href="#skills">skills</a></li>
      <li><a href="#projects">Project</a></li>
      <li><a href="#contact">contact</a></li>
    </ul>
  </nav>
</header>

<style>
  :root {
    --header-height: 4rem;
  }

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

  @media only screen and (min-width: 600px) {
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
