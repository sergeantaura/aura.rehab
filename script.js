(function () {
  const breakpoint = window.matchMedia('(max-width: 768px)');
  const updateMode = () => {
    document.documentElement.dataset.viewport = breakpoint.matches ? 'mobile' : 'desktop';
  };
  updateMode();
  breakpoint.addEventListener('change', updateMode);

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.addEventListener('focus', () => button.classList.add('is-focused'));
    button.addEventListener('blur', () => button.classList.remove('is-focused'));
  });
})();
