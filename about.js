// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Loader logic: show loader for 3 seconds
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.display = 'none'; // hide loader
    main.classList.remove('hidden'); // show main content
  }, 3000); // 3 seconds
});
