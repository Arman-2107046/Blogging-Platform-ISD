// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Loader function
function showLoaderThenPage(href) {
    const loader = document.getElementById('loader');
    const main = document.getElementById('main-content');

    // Show loader
    loader.style.display = 'flex';
    main.classList.add('hidden');

    // After 3 seconds, hide loader and show main content
    setTimeout(() => {
        loader.style.display = 'none';
        main.classList.remove('hidden');

        // Only navigate if href is provided (for About, Blog, etc.)
        if (href) {
            window.location.href = href;
        }
    }, 3000);
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Show loader on first load
    showLoaderThenPage();

    // Attach click listeners to nav links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            showLoaderThenPage(href);
        });
    });
});
