// Set current year
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

    // --- Post Management ---
    const postForm = document.getElementById("postForm");
    const postsContainer = document.querySelector(".posts");

    // Load saved posts from localStorage
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(addPostToPage);

    // Handle form submission
    postForm.addEventListener("submit", e => {
        e.preventDefault();

        const title = document.getElementById("postTitle").value;
        const content = document.getElementById("postContent").value;
        const date = new Date().toISOString().split("T")[0];

        const newPost = { title, content, date };

        posts.unshift(newPost); // add to start
        localStorage.setItem("posts", JSON.stringify(posts));

        addPostToPage(newPost);

        postForm.reset();
    });

    function addPostToPage(post) {
        const article = document.createElement("article");
        article.innerHTML = `
          <time datetime="${post.date}">${new Date(post.date).toDateString()}</time>
          <h3>${post.title}</h3>
          <p class="summary">${post.content}</p>
        `;
        postsContainer.prepend(article);
    }
});

// Hide loader once page is fully loaded
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('main-content').classList.remove('hidden');
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1500); // Loader shows for 1.5 seconds
});
