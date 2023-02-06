<script>
  import { addInView, removeInView } from '../stores';
  import viewport from '../useViewportAction';
  import { theme } from '../stores';

  const handleEnterViewport = () => {
    addInView('contact');
  };
  const handleExitViewport = () => {
    removeInView('contact');
  };

  $: invert = $theme === 'dark' ? ' invert' : '';
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

    <div style="--icon-size: 9.5vw">
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
          class={'github icon' + invert}><p class="sr-only">github</p></a
        >
      </div>
    </div>
  </div>
</section>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-size: 8.2vw;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  .email-link {
    font-size: 5.7vw;
  }

  .email-link {
    text-decoration: none;
  }

  .email-link:hover {
    text-decoration: underline;
  }

  .icons {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }

  .icon {
    content: '';
    display: block;
    width: var(--icon-size);
    height: var(--icon-size);
    border-radius: var(--border-radius);
  }

  .icon:hover {
    transform: scale(1.1);
  }

  .linkedin {
    background: url('/assets/linkedin-icon.svg');
    background-size: var(--icon-size) var(--icon-size);
  }

  .github {
    background: url('/assets/github-icon.svg');
    background-size: var(--icon-size) var(--icon-size);
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

    .email-link {
      font-size: 3.5rem;
    }
  }
</style>
