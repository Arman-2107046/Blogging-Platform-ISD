// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Dynamic posts
const posts = [
  {
    id: 1,
    title: "How writing creates personal revenue",
    date: "2025-09-27",
    summary: "Writing builds authority, attracts an audience, and opens revenue paths — membership, paid newsletters, sponsored posts, or product sales."
  },
  {
    id: 2,
    title: "Turn feelings into ideas — the habit of journaling publicly",
    date: "2025-09-15",
    summary: "When you write down emotions, you distill unique perspectives that readers connect with — that connection is the seed of brand trust."
  }
];

// Load liked/bookmarked posts from localStorage
let likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");

// Render posts dynamically
const postsContainer = document.querySelector(".posts");
posts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <time datetime="${post.date}" class="date">${post.date}</time>
    <h3>${post.title}</h3>
    <p class="summary">${post.summary}</p>
    <div style="margin-top:8px">
      <button class="btn like-btn" data-id="${post.id}">${likedPosts.includes(post.id) ? '❤️ Liked' : '🤍 Like'}</button>
    </div>
  `;
  postsContainer.appendChild(article);
});

// Handle likes
document.querySelectorAll(".like-btn").forEach(button => {
  button.addEventListener("click", () => {
    const postId = parseInt(button.getAttribute("data-id"));
    if (!likedPosts.includes(postId)) {
      likedPosts.push(postId);
      button.textContent = '❤️ Liked';
    } else {
      likedPosts = likedPosts.filter(id => id !== postId);
      button.textContent = '🤍 Like';
    }
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  });
});
