<script>
  import { inview, addInview, removeInview } from "../stores";
  import viewport from "../useViewportAction";

  const handleEnterViewport = () => {
    addInview("contact");
  };
  const handleExitViewport = () => {
    removeInview("contact");
  };
</script>

<section
  class="contact page"
  id="contact"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2 class="sr-only">contact</h2>

  <div class="contact-links">
    <div class="email title">
      <p>Get in touch</p>
      <a href="mailto:robbevsb.dev@gmail.com" class="email-link"
        >robbevsb.dev@gmail.com</a
      >
    </div>

    <div>
      <p class="socials title">You can also find me here</p>
      <div class="icons">
        <a
          href="https://www.linkedin.com/in/robbe-vanslambrouck-281734242/"
          class="linkedin icon"
          target="_blank"><p class="sr-only">LinkedIn</p></a
        >
        <a
          href="https://github.com/RobbeVanslambrouck"
          target="_blank"
          class="github icon"><p class="sr-only">github</p></a
        >
      </div>
    </div>
  </div>
</section>

<style>
  .page {
    min-height: 0;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: calc(100vh / 2) 0;
  }

  .title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  .email-link,
  .linkedin,
  .github {
    font-size: 2.4rem;
    color: #21209c;
  }

  .icons {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  .icon {
    content: "";
    display: block;
    width: 4rem;
    height: 4rem;
  }

  .icon:hover {
    transform: scale(1.1);
  }

  .linkedin {
    background: url("/assets/linkedin-icon.svg");
    background-size: 4rem 4rem;
  }

  .github {
    background: url("/assets/github-icon.svg");
    background-size: 4rem 4rem;
  }

  @media only screen and (min-width: 600px) {
    .icon {
      width: 6rem;
      height: 6rem;
    }

    .linkedin {
      background-size: 6rem 6rem;
    }

    .github {
      background-size: 6rem 6rem;
    }

    .title {
      font-size: 5rem;
    }

    .email-link,
    .linkedin,
    .github {
      font-size: 3.5rem;
    }
  }
</style>
