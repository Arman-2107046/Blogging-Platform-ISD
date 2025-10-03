document.addEventListener("DOMContentLoaded", () => {
  const postsList = document.getElementById("postsList");
  const search = document.getElementById("search");
  const filterCategory = document.getElementById("filterCategory");

  let posts = JSON.parse(localStorage.getItem("posts")) || [];

  function renderPosts() {
    const keyword = search.value.toLowerCase();
    const category = filterCategory.value;

    postsList.innerHTML = "";

    let filtered = posts.filter(post => {
      const matchesKeyword = post.title.toLowerCase().includes(keyword) ||
                             post.content.toLowerCase().includes(keyword) ||
                             (post.tags && post.tags.join(",").toLowerCase().includes(keyword));
      const matchesCategory = category === "" || post.category === category;
      return matchesKeyword && matchesCategory;
    });

    if (filtered.length === 0) {
      postsList.innerHTML = "<p>No posts found.</p>";
      return;
    }

    filtered.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");

      div.innerHTML = `
        <h3>${post.title}</h3>
        <time>${new Date(post.date).toDateString()}</time>
        <p>${post.content.substring(0, 150)}...</p>
        <p class="tags"><b>Tags:</b> ${post.tags.join(", ") || "None"} | <b>Category:</b> ${post.category || "Uncategorized"}</p>
      `;

      postsList.appendChild(div);
    });
  }

  search.addEventListener("input", renderPosts);
  filterCategory.addEventListener("change", renderPosts);

  renderPosts();
});
