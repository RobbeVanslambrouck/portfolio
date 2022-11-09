<script>
  import githubLogo from '../assets/github-icon.svg';
</script>

<footer>
  <p>
    made by: <a href="https://github.com/RobbeVanslambrouck/"
      ><img src={githubLogo} alt="github icon" /> robbe vanslambrouck</a
    >
  </p>
</footer>

<style>
  footer {
    background-color: var(--primary-glaze);
    box-shadow: 0.1rem -0.2rem 0.2rem var(--outline);
    font-size: 1.6rem;
    height: 5rem;
    color: var(--on-primary);
  }
  p {
    display: flex;
    gap: 1rem;
    justify-content: center;
    text-transform: capitalize;
    height: 5rem;
    align-items: center;
  }
  a {
    color: var(--on-primary);
    text-decoration: none;
    display: flex;
    gap: 0.3rem;
  }

  a:hover {
    color: var(--custom-color-1);
    text-decoration: underline;
  }

  img {
    height: 1.4rem;
  }
</style>
