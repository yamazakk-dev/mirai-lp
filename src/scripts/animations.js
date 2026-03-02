document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          const animation = entry.target.dataset.animation || 'animate-fade-up';
          entry.target.style.animation = `var(--animate-${animation.replace('animate-', '')})`;
          // Add delay if specified
          const delay = entry.target.dataset.delay;
          if (delay) {
            entry.target.style.animationDelay = delay;
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
