<script>
  export let src;
  export let alt;
</script>

<div class="container">
  <img {src} {alt} />
  <div class="overlay">
    <slot />
  </div>
</div>

<style>
  .container {
    position: relative;
    display: inline-block;
  }
  .container img {
    transition: 0.5s ease;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }
  .overlay {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .container:hover img {
    filter: blur(1rem);
  }

  .container:hover .overlay {
    opacity: 1;
  }
</style>
