<script>
  import { inview, addInview, removeInview } from '../stores';
  import viewport from '../useViewportAction';
  import mugshot from '../assets/mugshot.jpg';

  const handleEnterViewport = () => {
    addInview('about');
  };
  const handleExitViewport = () => {
    removeInview('about');
  };
</script>

<section
  class="about page"
  id="about"
  use:viewport
  on:enterViewport={handleEnterViewport}
  on:exitViewport={handleExitViewport}
>
  <h2>{'<about-me />'}</h2>
  <div id="content">
    <img src={mugshot} alt="selfie" />
    <p>
      Hi, my name is Robbe Vanslambrouck and I am a self taught front-end
      developer with a passion for learning, functional design and technology. I
      am currently available for hire
    </p>
  </div>
</section>

<style>
  .page {
    min-height: 40vh;
    max-width: 80rem;
    margin: 0 auto;
  }
  p {
    font-size: 1.8rem;
  }

  img {
    border-radius: 0.5rem;
  }

  #content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  #content img {
    min-width: 10rem;
    width: 30%;
    max-width: 20rem;
  }

  #content p {
    line-height: 2.2rem;
    text-align: center;
    max-width: 60rem;
  }

  @media only screen and (min-width: 500px) {
    #content {
      flex-direction: row;
    }
    #content p {
      text-align: justify;
    }
  }
</style>
