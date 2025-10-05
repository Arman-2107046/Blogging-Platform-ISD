// Dummy blog data (same as in index.js)
const blogs = [{
        id: 1,
        title: "Mastering JavaScript in 2025",
        publishedAt: "2025-10-01",
        category: "JavaScript",
        intro: "Learn the latest tricks and patterns in JavaScript for modern web development...",
        content: "Full article about mastering JavaScript in 2025 with new ES features, frameworks, and best practices...",
        image: "https://i.pinimg.com/736x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg"
    },
    {
        id: 2,
        title: "CSS Secrets for Stunning Websites",
        publishedAt: "2025-09-15",
        category: "CSS & Design",
        intro: "Discover the hidden gems in CSS to create beautiful, responsive designs...",
        content: "Deep dive into CSS Grid, Flexbox, and modern design patterns with animations and transitions...",
        image: "https://i.pinimg.com/736x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg"
    },
    {
        id: 3,
        title: "Why HTML Still Matters",
        publishedAt: "2025-08-30",
        category: "HTML",
        intro: "HTML is the backbone of the web. Here's why it remains essential...",
        content: "Discussing HTML5 semantic tags, accessibility, SEO benefits, and why mastering HTML is still crucial...",
        image: "https://i.pinimg.com/736x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg"
    },
    {
        id: 4,
        title: "The Future of Web Development",
        publishedAt: "2025-07-20",
        category: "Web Development",
        intro: "Explore what's coming in the next 5 years for frontend and backend developers...",
        content: "Predictions about AI in coding, WebAssembly, JAMStack, and serverless technologies shaping the future...",
        image: "https://i.pinimg.com/736x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg"
    }
];

// Format date nicely (e.g., Oct 4, 2025)
function formatDate(dateStr) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Render blog details
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const blog = blogs.find(b => b.id === id);

if (blog) {
    document.getElementById("blog-details").innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <h2>${blog.title}</h2>
        <p class="meta">${blog.category} • ${formatDate(blog.publishedAt)}</p>
        <p class="intro">${blog.intro}</p>
        <p>${blog.content}</p>
    `;
} else {
    document.getElementById("blog-details").innerHTML = `<p>Blog not found!</p>`;
}